import createFloatingText from './createFloatingText.js';
import FightStatuses from './FightStatuses.js';
import throttleProperty from './utils/throttleProperty.js';

class PlayerDuringFight {
  constructor(game, fightScene, player) {
    this.game = game;
    this.fightScene = fightScene;
    this.player = player;
    this.fightStatistics = player.fightStatistics.statistics;
    this.skills = player.battleSkills;
    this.canAttack = false;
    this.canChangeTarget = true;
    this.isAlive = true;
    this.battleSkills = [];
    this.canUseSkill = true;
    this.moveLeftInFight = false;
    this.moveRightInFight = false;
    this.moveVariableInFight = 0;
    this.fightStatuses = new FightStatuses();
    this.loadSprites();
  }
  update(CharactersLayer, HUDLayer) {
    if (this.fightStatistics.currentHealthPoints < 1 && this.isAlive) {
      this.isAlive = false;
      this.player.loseConsciousness();
    }
    const encounter = this.fightScene.encounter;
    if (this.canAttack && !this.fightStatuses.stun && this.game.input.keyboard.space.isDown) {
      this.attack(encounter.actualTarget);
      this.moveRightInFight = true;
    }
    if (this.game.input.keyboard.arrowDown.isDown && this.canChangeTarget) {
      encounter.pointerCounter++;
      if (encounter.pointerCounter === encounter.encounterEnemies.length) {
        encounter.pointerCounter = 0;
      }
      encounter.actualTarget = encounter.encounterEnemies[encounter.pointerCounter];
      throttleProperty(this, 'canChangeTarget', false, 300);
    }
    if (this.game.input.keyboard.arrowUp.isDown && this.canChangeTarget) {
      encounter.pointerCounter--;
      if (encounter.pointerCounter === -1) {
        encounter.pointerCounter = encounter.encounterEnemies.length - 1;
      }
      encounter.actualTarget = encounter.encounterEnemies[encounter.pointerCounter];
      throttleProperty(this, 'canChangeTarget', false, 300);
    }
    if (this.moveRightInFight) {
      this.moveVariableInFight += 3;
      if (this.moveVariableInFight >= 80) {
        this.moveRightInFight = false;
        this.moveLeftInFight = true;
      }
    }
    if (this.moveLeftInFight) {
      this.moveVariableInFight -= 3;
      if (this.moveVariableInFight <= 0) {
        this.moveLeftInFight = false;
      }
    }
    this.updatePowerPoints();
    this.draw(CharactersLayer, HUDLayer);
  }
  draw(CharactersLayer, HUDLayer) {
    CharactersLayer.drawImage(this.sprite, 100 + this.moveVariableInFight, 240, 200, 300);
    for (let i = 0; i < this.battleSkills.length; i++) {
      HUDLayer.drawImage(
        this.battleSkills[i].button.sprite,
        this.battleSkills[i].button.x,
        this.battleSkills[i].button.y,
        this.battleSkills[i].button.width,
        this.battleSkills[i].button.height
      );
    }
    HUDLayer.font = '20px Georgia';
    HUDLayer.fillStyle = 'white';
    HUDLayer.drawImage(this.powerBarWrapper, 50, 180, 106, 36);
    HUDLayer.drawImage(
      this.powerBar,
      53,
      183,
      this.fightStatistics.currentPowerPoints / this.fightStatistics.maxPowerPoints * 100,
      30
    );
    HUDLayer.drawImage(this.healthBarWrapper, 50, 100, 106, 36);
    HUDLayer.drawImage(
      this.healthBar,
      53,
      103,
      this.fightStatistics.currentHealthPoints / this.fightStatistics.maxHealthPoints * 100,
      30
    );
    HUDLayer.fillText(
      this.fightStatistics.currentHealthPoints + '/' + this.fightStatistics.maxHealthPoints,
      64,
      124
    );
    HUDLayer.drawImage(this.manaBarWrapper, 50, 140, 106, 36);
    HUDLayer.drawImage(
      this.manaBar,
      53,
      143,
      this.fightStatistics.currentManaPoints / this.fightStatistics.maxManaPoints * 100,
      30
    );
    HUDLayer.fillText(
      this.fightStatistics.currentManaPoints + '/' + this.fightStatistics.maxManaPoints,
      75,
      164
    );
    if (this.fightStatuses.stun) {
      HUDLayer.save();
      HUDLayer.strokeStyle = 'black';
      HUDLayer.fillStyle = 'yellow';
      HUDLayer.font = '35px Georgia';
      HUDLayer.strokeText('Ogłuszony', 200, 250);
      HUDLayer.fillText('Ogłuszony', 200, 250);
      HUDLayer.restore();
    }
  }
  useSkill(skillIndex) {
    if (!this.canUseSkill) {
      return;
    }
    if (this.skills[skillIndex].manaCost > this.fightStatistics.currentManaPoints) {
      this.game.console.addMessage('Brak wystarczającej ilości punktów many!');
      return;
    }
    this.game.console.addMessage('Użyto umiejętności ' + this.skills[skillIndex].name);
    this.fightStatistics.currentManaPoints -= this.skills[skillIndex].manaCost;
    this.fightStatistics.currentPowerPoints = 0;
    let dmg;
    switch (skillIndex) {
      case 0:
        /*if (this.equippedItems[3]) {
          dmg = this.strenght * 2 + randomNumber(this.equippedItems[3].bonus - 1) + 1;
        }
        else {
          dmg = this.strenght * 2;
        }
        */
        //dmg = Math.floor(dmg);
        dmg = 20;
        this.fightScene.encounter.actualTarget.getDamage(dmg)
        break;
      case 1:
        /*
        if (this.equippedItems[3]) {
          dmg = this.strenght / 2 + randomNumber(this.equippedItems[3].bonus -1) + 1;
        }
        else {
          dmg = this.strenght / 2;
        }
        dmg = Math.floor(dmg);
        */
        dmg = 10;
        for (let i = 0; i < this.fightScene.encounter.encounterEnemies.length; i++) {
          this.fightScene.encounter.encounterEnemies[i].getDamage(dmg);
        }
        break;
      case 2:
      default:
        break;
    }
  }
  attack(target) {
    let dmg;
    this.fightStatistics.currentPowerPoints -= 200;
    /*if (this.equippedItems[3]) {
      dmg = this.strenght + randomNumber(this.equippedItems[3].bonus - 1) + 1;
    }
    else {
      dmg = this.strenght;
    }*/
    dmg = 10;
    target.getDamage(dmg);
  }
  getDamage(dmg, enemyName) {
    let reducedDmg = dmg - Math.floor(this.fightStatistics.armorPoints / 3);
    if (reducedDmg <= 0) reducedDmg = 1;
    this.fightStatistics.currentHealthPoints -= reducedDmg;
    this.game.console.addMessage('Otrzymałeś ' + reducedDmg + ' punktów obrażeń od ' + enemyName + '!');
    createFloatingText(this.fightScene.floatingTexts, reducedDmg, 185, 280, 'red', 2000);
  }
  loadSprites() {
    this.sprite = new Image;
    this.sprite.src = 'img/hero.png';
    this.healthBarWrapper = new Image();
    this.healthBarWrapper.src = 'img/health_bar.png';
    this.healthBar = new Image();
    this.healthBar.src = 'img/health.png';
    this.manaBarWrapper = new Image();
    this.manaBarWrapper.src = 'img/mana_bar.png';
    this.manaBar = new Image();
    this.manaBar.src = 'img/mana.png';
    this.powerBar = new Image();
    this.powerBar.src = 'img/bar.png';
    this.powerBarWrapper = new Image();
    this.powerBarWrapper.src = 'img/bar_bg.png';
  }
  updatePowerPoints() {
    if (!this.fightStatuses.stun) {
      this.fightStatistics.currentPowerPoints += 3
      if (this.fightStatistics.currentPowerPoints < 200) {
        this.canAttack = false;
        this.canUseSkill = false;
      }
      else {
        this.canAttack = true;
        this.canUseSkill = true;
        if (this.fightStatistics.currentPowerPoints > this.fightStatistics.maxPowerPoints) {
          this.fightStatistics.currentPowerPoints = 200;
        }
      }
    }
  }
}

export default PlayerDuringFight;
