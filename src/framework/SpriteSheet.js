class SpriteSheet {
  constructor(fileName, frameWidth, frameHeight) {
    this.image = new Image();
    this.image.src = fileName;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.rowLength;
    this.image.addEventListener('load', () => this.rowLength = Math.floor(this.image.width / frameWidth));
  }
}

export default SpriteSheet;
