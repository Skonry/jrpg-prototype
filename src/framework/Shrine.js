import collisionDetection from './utils/collisionDetection.js';
import RectangleShape from './RectangleShape.js';

class Shrine {
  constructor(game, x, y) {
    this.game = game;
    this.rectShape = new RectangleShape(x, y, 150, 200);
    this.sprite = new Image(150, 200);
    this.sprite.src = 'img/kapliczka.png';
  }
  update(ctx) {
    if (
      this.game.input.keyboard.space.isDown &&
      !this.game.player.isAlive &&
      collisionDetection(this.rectShape, this.game.player.rectShape)
    ) {
      console.log('TODO: player resurrection in shrine');
      /*this.game.player.isAlive = true;
      this.game.player.healthPoints = this.game.player.maxHealthPoints / 2;
      const expPenalty = 500;
      this.game.player.exp -= expPenalty;
      if (this.game.player.exp < 0) {
        this.game.player.exp = 0;
      }
      this.game.console.addMessage("Wskrzeszono bohatera. Odjęto " + expPenalty +" punktów doświadczenia.");
      */
    }
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
  }
}

export default Shrine;
