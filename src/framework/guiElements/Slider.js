import GuiElement from './GuiElement.js';

class Slider extends GuiElement {
  constructor(x, y, width, height, valueOptionsAmount) {
    super(x, y, width, height);
    this.valueOptionsAmount = valueOptionsAmount;
    this.gapSize = width / valueOptionsAmount;
    this.currentValue = valueOptionsAmount / 2;
    this.markerRect = {
      x: ((this.currentValue - 1) * this.gapSize) + this.x,
      y: this.y - 5,
      width: 20,
      height: this.height + 10
    };
  }
  draw(ctxHUD) {
    ctxHUD.save();
    ctxHUD.fillStyle = 'white';
    ctxHUD.fillRect(this.x, this.y, this.width, this.height);
    ctxHUD.fillText(this.currentValue, this.markerRect.x + 5, this.markerRect.y + 70);
    ctxHUD.fillStyle = 'black';
    ctxHUD.fillRect(this.markerRect.x, this.markerRect.y, this.markerRect.width, this.markerRect.height);
    ctxHUD.restore();
  }
  setNewValue(ev) {
    this.currentValue = Math.ceil((ev.x - this.x) / this.gapSize);;
    this.markerRect.x = ((this.currentValue - 1) * this.gapSize) + this.x;
  }
}

export default Slider;
