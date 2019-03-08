import collisionDetection from './utils/collisionDetection.js';
import RectangleShape from './RectangleShape.js';
import Vector2 from './Vector2.js';

class Teleport {
  constructor(game, x, y, destinationScene, destinationLevelName, destinationX, destinationY) {
    this.game = game;
    this.sprite = new Image(100, 100);
    this.sprite.src = 'img/teleport.png';
    this.rectShape = new RectangleShape(x, y, 100, 100);
    this.destinationScene = destinationScene;
    this.destinationLevelName = destinationLevelName;
    this.destinationPosition = new Vector2(destinationX, destinationY);
    this.displayPopup = false;
    this.popup = new Image();
    this.popup.src = 'img/dialogbox.png';
  }
  update(Layer1, HUDLayer) {
    if (collisionDetection(this.rectShape, this.game.player.rectShape)) {
      this.displayPopup = true;
      if (this.game.input.keyboard.space.isDown) {
        this.game.console.addMessage('Przeniesiono się na scenę: ' + this.destinationScene);
        this.game.sceneManager.changeCurrentScene(
          this.destinationScene,
          {
            setPlayerPosition: true,
            playerPositionX: this.destinationPosition.x,
            playerPositionY: this.destinationPosition.y
          }
        );
      }
    }
    else {
      this.displayPopup = false;
    }
    this.draw(Layer1, HUDLayer);
  }
  draw(Layer1, HUDLayer) {
    Layer1.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
    if (this.displayPopup) {
      HUDLayer.font = '25px Georgia';
      HUDLayer.drawImage(this.popup, 225, 20, 520, 150);
      const text = 'Chcesz przenieś się do: ' + this.destinationLevelName + '?';
      const xPos = (520 - HUDLayer.measureText(text).width) / 2 + 225;
      HUDLayer.fillStyle = 'white';
      HUDLayer.fillText(text, xPos, 75);
      HUDLayer.fillText('<Spacja>', 440, 130);
    }
  }
}

export default Teleport;
