import GuiElement from './GuiElement.js';

class Button extends GuiElement {
  constructor(x, y, width, height, sprite) {
    super(x, y, width, height);
    this.sprite = new Image();
    this.sprite.src = sprite;
  }
}

export default Button;
