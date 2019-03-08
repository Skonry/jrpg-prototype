import collisionDetection from './utils/collisionDetection.js';
import DialogBox from './DialogBox.js';
import randomNumber from './utils/randomNumber.js';
import RectangleShape from './RectangleShape.js';

class Npc {
  constructor(game, spriteFile, x, y, isStatic, name, questsIds, isVendor) {
    this.game = game;
    this.sprite = new Image(50, 70);
    this.sprite.src = spriteFile;
    this.rectShape = new RectangleShape(x, y, 50, 70);
    this.speed = 3;
    this.isMoving = false;
    this.canMove = true;
    this.canMoveUp = true;
    this.canMoveDown = true;
    this.canMoveLeft = true;
    this.canMoveRight = true;
    this.direction = 0; // 0 DOWN 1 LEFT 2 RIGHT 3 UP
    this.frameCounter = 0;
    this.timeToNextFrame = 0;
    this.isStatic = isStatic;
    this.name = name;
    this.isActiv = false;
    this.questExclamationMark = new Image();
    this.questExclamationMark.src = 'img/wykrzyknik.png';
    this.questsIds = questsIds;
    this.isVendor = isVendor;
    this.hasQuestExclamationMark = this.questsIds ? true : false;
    setInterval(() => {
      this.generateDirection();
    }, randomNumber(3000) + 1000);
  }
  draw(ctx) {
    if (this.isStatic) {
      ctx.drawImage(
        this.sprite,
        this.rectShape.x - this.sprite.width / 2,
        this.rectShape.y - this.sprite.height / 2,
        this.sprite.width,
        this.sprite.height
      );
    }
    else {
      ctx.drawImage(this.sprite,
        32 * this.frameCounter,
        48 * this.direction,
        32,
        48,
        this.rectShape.x - this.sprite.width / 2,
        this.rectShape.y - this.sprite.height / 2,
        this.sprite.width,
        this.sprite.height
      );
    }
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = '25px Georgia';
    ctx.fillText(
      this.name,
      this.rectShape.x - 10 - this.sprite.width / 2,
      this.rectShape.y - 5 - this.sprite.height / 2
    );
    ctx.restore();
    if (this.hasQuestExclamationMark) {
      ctx.drawImage(
        this.questExclamationMark,
        this.rectShape.x - 15,
        this.rectShape.y - this.sprite.height / 2 - 90,
        25,
        70
      );
    }
  }
  update(ctx) {
    /*
    if (
      this.game.input.keyboard.space.isDown &&
      collisionDetection(this.rectShape, this.game.player.rectShape) &&
      !this.isActiv &&
      this.game.player.canToggleWindow
    ) {
      this.isActiv = true;
      this.canMove = false;
      if (this.isVendor) {
        this.isActiv = false
        this.game.sceneManager.changeCurrentScene('shopScene');
        return;
      }
      let quest;
      if (this.questsIds) {
        quest = this.game.quests.find((quest) => quest.id === this.questsIds[0] && quest.status !== 'finished');
      }
      this.game.sceneManager.currentScene.activDialogBox = new DialogBox(this.game, quest);
      this.game.notifyAction({action: 'talk', target: this.name});
    }
    */
    if (!this.isStatic) {
      this.move();
    }
    this.draw(ctx);
  }
  move() {
    if (!this.canMove) {
      this.frameCounter = 0;
      return;
    }
    this.blockOnSceneEdge();
    if (this.direction === 0 && this.canMoveDown) {
      this.rectShape.y += this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 1 && this.canMoveLeft) {
      this.rectShape.x -= this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 2 && this.canMoveRight) {
      this.rectShape.x += this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 3 && this.canMoveUp) {
      this.rectShape.y -= this.speed;
      this.isMoving = true;
    }
    if (this.isMoving) {
      this.timeToNextFrame++;
      if (this.timeToNextFrame > 13) {
        this.timeToNextFrame = 0;
        this.frameCounter++;
        if (this.frameCounter > 3) {
          this.frameCounter = 0;
        }
      }
    }
  }
  generateDirection() {
    //if (this.game.stateManager.currentLevel === null) return;
    //if (this.game.stateManager.currentLevel.activDialogBox && this.game.stateManager.currentLevel.activDialogBox.isActiv) {
    //  return;
  //  }
    let rand = randomNumber(5);
    if (rand < 4) {
      this.direction = rand;
      this.canMove = true;
    }
    else {
      this.canMove = false;
    }
  }
  blockOnSceneEdge() {
    if (this.rectShape.x + this.rectShape.width > this.game.sceneManager.currentScene.width) {
      this.canMoveRight = false;
      this.generateDirection();
    }
    else {
      this.canMoveRight = true;
    }
    if (this.rectShape.x < 0) {
      this.canMoveLeft = false;
      this.generateDirection();
    }
    else {
      this.canMoveLeft = true;
    }
    if (this.rectShape.y + this.rectShape.width + 20 > this.game.sceneManager.currentScene.height) {
      this.canMoveDown = false;
      this.generateDirection();
    }
    else {
      this.canMoveDown = true;
    }
    if (this.rectShape.y < 0) {
      this.canMoveUp = false;
      this.generateDirection();
    }
    else {
      this.canMoveUp = true;
    }
  }
}

export default Npc;
