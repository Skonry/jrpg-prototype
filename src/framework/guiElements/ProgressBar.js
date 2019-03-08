import GuiElement from './GuiElement.js';

class ProgressBar extends GuiElement {
  constructor(x, y, width, height, borderSize, sprite, bgSprite) {
    super(x, y, width, height);
    this.borderSize = borderSize;
    this.sprite = new Image();
    this.sprite.src = sprite;
    this.bgSprite = new Image();
    this.bgSprite.src = bgSprite;
  }
}

export default ProgressBar;
