import GuiElement from './GuiElement.js';

class Checkbox extends GuiElement {
  constructor(x, y, radius, label) {
    super(x, y, radius * 2, radius * 2);
    this.checked = false;
    this.label = label;
  }
  changeState(){
    this.checked = !this.checked;
  }
  draw(ctxHUD) {
    ctxHUD.save();
    ctxHUD.font = this.checked ? "32px Georgia" : "20px Georgia";
    ctxHUD.fillStyle = 'white';
    ctxHUD.beginPath();
    ctxHUD.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, 2 * Math.PI);
    ctxHUD.fill();
    ctxHUD.fillText(
      this.label,
      (this.x + this.width / 2) - (Math.round(ctxHUD.measureText(this.label).width / 2)),
      this.y + this.height * 2
    );
    if (this.checked) {
      ctxHUD.fillStyle = 'black';
      ctxHUD.beginPath();
      ctxHUD.arc(this.x + this.width / 2, this.y + this.height / 2, (this.width - 12) / 2, 0, 2 * Math.PI);
      ctxHUD.fill();
    }
    ctxHUD.restore();
  }
}

export default Checkbox;
