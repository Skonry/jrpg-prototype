import Button from './guiElements/Button.js';
import pointInsideRectangle from './utils/pointInsideRectangle.js';

class Note {
  constructor(game, sprite, text) {
    this.game = game;
    this.sprite = new Image(600, 700);
    this.sprite.src = sprite
    this.text = text;
    this.isOpen = false;
    this.returnButton = new Button(40, 610, 160, 80, 'img/btn_back.png');
    this.x = 250;
    this.y = 10;
    this.width = 600;
    this.height = 700;
  }
  update(ctx) {
    if (this.isOpen) {
      this.draw(ctx);
    }
  }
  openNote() {
    if (this.game.player.canToggleWindow) {
      this.isOpen = true;
      this.game.player.canMove = false;
      this.game.input.subscribeSignal('click', this.onClick, this, 'closeNote')
    }
  }
  onCLick({x, y}) {
    if (pointInsideRectangle(x, y, this.returnButton)) {
      this.isOpen = false;
      this.game.player.canMove = true;
      this.game.input.removeCallback('closeNote', 'click');
    }
  }
  draw(ctxHUD) {
    ctxHUD.save();
    ctxHUD.fillStyle = 'black';
    ctxHUD.drawImage(this.sprite, this.x, this.y, this.width, this.height);
    ctxHUD.fillText(this.text, this.x + 60, this.y + 90);
    ctxHUD.drawImage(this.returnButton.sprite, this.returnButton.x, this.returnButton.y);
    ctxHUD.restore();
  }
}

export default Note;
