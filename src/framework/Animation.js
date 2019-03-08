class Animation {
  constructor(spriteSheet, frameDuration, rowNumber, parent) {
      this.spriteSheet = spriteSheet;
      this.rowNumber = rowNumber;
      this.frameDuration = frameDuration;
      this.parent = parent;
      this.durationCounter = 0;
      this.currentFrame = 0;
  }
  update(ctx) {
    if (this.parent.isMoving) {
      if (this.durationCounter === this.frameDuration - 1) {
        this.currentFrame = (this.currentFrame + 1) % this.spriteSheet.rowLength;
      }
      this.durationCounter = (this.durationCounter + 1) % this.frameDuration;
    }
    this.draw(ctx)
  }
  draw(ctx) {
    ctx.drawImage(
      this.spriteSheet.image,
      this.currentFrame * this.spriteSheet.frameWidth,
      this.rowNumber * this.spriteSheet.frameHeight,
      this.spriteSheet.frameWidth,
      this.spriteSheet.frameHeight,
      this.parent.rectShape.x,
      this.parent.rectShape.y,
      this.parent.rectShape.width,
      this.parent.rectShape.height
    );
  }
}

export default Animation;
