class FloatingText {
  constructor(containingArray ,text, x, y, color, duration) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    containingArray.push(this);
    setTimeout(() => {
      const index = containingArray.findIndex((element) => element === this);
      containingArray.splice(index, 1);
    }, duration);
  }
  update(ctx) {
    this.y -= 2;
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.font = '35px Georgia';
    ctx.strokeText(this.text, this.x, this.y);
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}

export default FloatingText;
