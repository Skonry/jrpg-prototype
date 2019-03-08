import CanvasLayer from './CanvasLayer.js';

const empty = () => {};

class Scene {
  constructor(game, name, {update, init = empty , enter = empty, exit = empty, methods = {}, data = {}}) {
    this.game = game;
    this.name = name;
    this.init = init.bind(this);
    this.enter = enter.bind(this);
    this.exit = exit.bind(this);
    this.update = update.bind(this);
    this.methods = Object.keys(methods);
    this.methods.forEach((method) => {
      this[method] = methods[method].bind(this);
    });
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
    this.sceneEntities = [];
    this.layers = [];
    this.signalListenersKeys = {};
    this.init();
  }
  addCanvasLayer(name, indexOrder = 0, width = 960, height = 704, x = 0, y = 0) {
    const canvasLayer = new CanvasLayer(name, indexOrder, width, height, x, y);
    this.layers.push(canvasLayer);
    this.layers.sort((a, b) => a.indexOrder - b.indexOrder);
    return canvasLayer.context;
  }
  translateLayer(name, x, y) {
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i].name === name) {
        this.layers[i].context.translate(x, y);
        return;
      }
    }
  }
  addSceneEntity(entity) {
    if (!(typeof entity.update === 'function')) {
      throw new Error('Update function is required in a scene entity');
    }
    entity.game = this.game;
    this.sceneEntities.push(entity);
  }
  addSignalListeners(listeners) {
    Object.keys(listeners).forEach((signalName) => {
      const listenerKey = this.name + signalName + 'listenerKey';
      this.game.input.subscribeSignal(signalName, listeners[signalName], this, listenerKey);
      this.signalListenersKeys[signalName] = listenerKey;
    });
  }
  removeSignalListeners() {
    Object.keys(this.signalListenersKeys).forEach((signalName) => {
      this.game.input.removeSignalCallback(this.signalListenersKeys[signalName], signalName);
    });
  }
}

export default Scene;
