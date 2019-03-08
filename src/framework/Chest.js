import collisionDetection from './utils/collisionDetection.js';
import randomNumber from './utils/randomNumber.js';
import RectangleShape from './RectangleShape.js';

class Chest {
  constructor(game, x, y, sprite, openingCodeLength) {
    this.game = game;
    this.rectShape = new RectangleShape(x, y, 50, 50);
    this.sprite = new Image(50, 50);
    this.sprite.src = sprite;
    this.openingCode = [];
    this.generateOpeningCode(openingCodeLength);
  }
  update(ctx) {
    if (this.game.input.keyboard.space.isDown && collisionDetection(this.rectShape, this.game.player.rectShape)) {
      this.game.sceneManager.changeCurrentScene('openingChestScene', this);
    }
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
  }
  generateOpeningCode(openingCodeLength) {
    for (let i = 0; i < openingCodeLength; i++) {
      const rand = randomNumber(2);
      if (rand === 0) this.openingCode.push('left');
      else this.openingCode.push('right');
    }
  }
}

export default Chest;
