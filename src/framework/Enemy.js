import createFloatingText from './createFloatingText.js';
import FightStatuses from './FightStatuses.js';
import randomNumber from './utils/randomNumber.js';

class Enemy {
  constructor(game, healthBar, healthBarWrapper, monster, index) {
    this.game = game;
    this.healthBar = healthBar;
    this.healthBarWrapper = healthBarWrapper;
    this.sprite = new Image();
    this.sprite.src = monster.sprite;
    this.healthPoints = monster.hp;
    this.maxHealthPoints = monster.hp;
    this.name = monster.name + index;
    this.type = monster.name;
    this.damage = monster.dmg;
    this.canAttack = false;
    this.expReward = monster.expReward;
    this.moveVariable = 0;
    this.moveLeft = false;
    this.moveRight = false;
    this.index = index;
    this.fightStatuses = new FightStatuses();
    this.width = monster.width;
    this.height = monster.height;
    this.drawX = 750;
    this.drawY = 270;
  }
  update(ctx, index) {
    if (this.healthPoints < 1) {
      this.die();
    }
    if (this.canAttack) {
      if (this.fightStatuses.stun) {
        this.delayNextAttack(5000);
        this.fightStatuses.stun = false;
      }
      else {
        this.moveLeft = true;
        this.attack();
        this.delayNextAttack(3000 + randomNumber(2000));
      }
      this.canAttack = false;
    }
    if (this.moveLeft) {
      this.moveVariable -= 3;
      if (this.moveVariable <= -70) {
        this.moveLeft = false;
        this.moveRight = true;
      }
    }
    if (this.moveRight) {
      this.moveVariable += 3;
      if (this.moveVariable >= 0) {
        this.moveRight = false;
      }
    }
    this.draw(ctx, index);
  }
  draw(ctx , i) {
    ctx.drawImage(
      this.healthBarWrapper,
      (this.drawX + 40) + this.moveVariable,
      (this.drawY - 15) + i * this.height,
      106,
      25
    );
    ctx.drawImage(
      this.healthBar,
      (this.drawX + 43) + this.moveVariable,
      (this.drawY - 12) + i * this.height,
      this.healthPoints / this.maxHealthPoints * 100,
      20
    );
    ctx.drawImage(
      this.sprite,
      this.drawX + this.moveVariable,
      this.drawY + i * this.height,
      this.width,
      this.height
    );
    if (this === this.game.sceneManager.currentScene.encounter.actualTarget) {
      ctx.drawImage(
        this.game.sceneManager.currentScene.encounter.pointerSprite,
        (this.drawX + 60) + this.moveVariable,
        (this.drawY - 50) + i * this.height,
        40,
        60
      );
    }
    if (this.fightStatuses.stun) {
      this.displayFightStatus(ctx, 'Ogłuszony', 'yellow', i)
    }
  }
  displayFightStatus(ctx, status, color, i) {
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
    ctx.font = '30px Georgia';
    ctx.strokeText(status, (this.drawX + 20), (this.drawY - 20) + i * this.height);
    ctx.fillText(status, (this.drawX + 20), (this.drawY - 20) + i * this.height);
    ctx.restore();
  }
  attack() {
    const dmg = this.damage + randomNumber(5) + 1;
    this.game.sceneManager.currentScene.playerDuringFight.getDamage(dmg, this.name);
  }
  getDamage(dmg) {
    this.healthPoints -= dmg;
    this.game.console.addMessage('Zadałeś ' + this.name + ' ' + dmg + ' punktów obrażeń!');
    createFloatingText(this.game.sceneManager.currentScene.floatingTexts ,dmg, this.drawX + 70, this.drawY + this.index * this.height, "red", 4500);
  }
  die() {
    this.game.notifyAction({action: 'kill' , target: this.type});
    this.game.sceneManager.currentScene.encounter.expPool += this.expReward;
    this.game.console.addMessage('Przeciwnik ' + this.name + ' zginął!');
    const index = this.game.sceneManager.currentScene.encounter.encounterEnemies.indexOf(this);
    this.game.sceneManager.currentScene.encounter.encounterEnemies.splice(index, 1);
    this.game.sceneManager.currentScene.encounter.pointerCounter--;
    if (this.game.sceneManager.currentScene.encounter.pointerCounter === -1){
      this.game.sceneManager.currentScene.encounter.pointerCounter = 0;
    }
    this.game.sceneManager.currentScene.encounter.actualTarget = this.game.sceneManager.currentScene.encounter.encounterEnemies[this.game.sceneManager.currentScene.encounter.pointerCounter];
  }
  delayNextAttack(delay) {
    setTimeout(() => {

      // check if enemy is alive after timeout
      if (this) {
        this.canAttack = true;
      }
    }, delay);
  }
}

export default Enemy;
