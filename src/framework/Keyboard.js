import Key from './Key.js';
import lowerCaseFirstLetter from './utils/lowerCaseFirstLetter.js';

class Keyboard {
  constructor(dispatchSignal) {
    this.dispatchSignal = dispatchSignal;
    this.createKeys();
  }
  processInput(input) {
    let key = lowerCaseFirstLetter(input.key);
    if (key === ' ') key = 'space';
    if (this[key]) {
      if (input.type === 'keydown') {
        if (!this[key].isDown || this[key].repeatable) {
          this.dispatchSignal(key + 'Down');
          if (input.keyCode > 47 && input.keyCode < 91) {
            this.dispatchSignal('letterKeyDown', {value: key});
          }
        }
        this[key].isDown = true;
      }
      else {
        this[key].isDown = false;
      }
    }
  }
  createKeys() {
    this.arrowUp = new Key(true);
    this.arrowDown = new Key(true);
    this.arrowLeft = new Key(true);
    this.arrowRight = new Key(true);
    this.space = new Key();
    this.escape = new Key();
    this.backspace = new Key();
    this.a = new Key();
    this.b = new Key();
    this.c = new Key();
    this.d = new Key();
    this.e = new Key();
    this.f = new Key();
    this.g = new Key();
    this.h = new Key();
    this.i = new Key();
    this.j = new Key();
    this.k = new Key();
    this.l = new Key();
    this.m = new Key();
    this.n = new Key();
    this.o = new Key();
    this.p = new Key();
    this.q = new Key();
    this.r = new Key();
    this.s = new Key();
    this.t = new Key();
    this.u = new Key();
    this.v = new Key();
    this.w = new Key();
    this.x = new Key();
    this.y = new Key();
    this.z = new Key();
    this['1'] = new Key();
    this['2'] = new Key();
    this['3'] = new Key();
    this['4'] = new Key();
    this['5'] = new Key();
    this['6'] = new Key();
    this['7'] = new Key();
    this['8'] = new Key();
    this['9'] = new Key();
    this['0'] = new Key();
  }
}

export default Keyboard;
