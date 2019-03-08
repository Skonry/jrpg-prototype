import addDomEventListeners from './addDomEventListeners.js';
import Keyboard from './Keyboard.js';
import Mouse from './Mouse.js';
import Signal from './Signal.js';

class Input {
  constructor(canvas) {
    this.keyboard = new Keyboard(this.dispatchSignal.bind(this));
    this.mouse = new Mouse(this.dispatchSignal.bind(this));
    this.inputsQueue = [];
    this.signals = new Map();
    addDomEventListeners(canvas, this.addInputToQueue.bind(this));
  }
  addInputToQueue(input) {
    this.inputsQueue.push({
      type: input.type,
      key: input.key,
      x: input.offsetX,
      y: input.offsetY,
      keyCode: input.keyCode
    });
  }
  processInputsQueue() {
    for (const input of this.inputsQueue) {
      if (input.type === 'keydown' || input.type === 'keyup') {
        this.keyboard.processInput(input);
      }
      else {
        this.mouse.processInput(input);
      }
    }
    this.inputsQueue = [];
  }
  subscribeSignal(signalName, callback, context, key) {
    if (!this.signals.has(signalName)) {
      this.registerSignal(signalName);
    }
    this.signals.get(signalName).subscribers.push({callback, context, key});
    return key;
  }
  registerSignal(signalName) {
    this.signals.set(signalName, new Signal());
  }
  dispatchSignal(signalName, data) {
    if (!this.signals.has(signalName)) return;
    this.signals.get(signalName).subscribers.forEach((subscriber) => subscriber.callback.call(subscriber.context, data));
  }
  removeSignalCallback(key, signalName) {
    const index = this.signals.get(signalName).subscribers.findIndex((subscriber) => subscriber.key === key);
    this.signals.get(signalName).subscribers.splice(index, 1);
  }
}

export default Input;
