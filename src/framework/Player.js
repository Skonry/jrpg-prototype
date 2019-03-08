import Animation from './Animation.js';
import Equipment from './Equipment.js';
import FightStatistics from './FightStatistics.js';
import Journal from './Journal.js';
import RectangleShape from './RectangleShape.js';
import Skills from './Skills.js';
import Spritesheet from './Spritesheet.js';
import throttleProperty from './utils/throttleProperty.js';
import Vector2 from './Vector2.js';

class Player {
  constructor(game, data) {
    this.game = game;
    this.name = data.name;
    this.gender = data.gender;
    this.gold = data.gold;
    this.level = data.level;
    this.exp = data.exp;
    this.rectShape = new RectangleShape(0, 0, 50, 70);
    this.lastMove = new Vector2();
    this.spriteSheet = this.gender === 'male' ?
      new Spritesheet('img/spritesheets/male01.png', 32, 48) :
      new Spritesheet('img/spritesheets/female01.png', 32, 48);
    this.animations = new Map();
    this.currentAnimation;
    this.createAnimations();
    this.fightStatistics = new FightStatistics(this.game, this, data.fightStatistics);
    this.journal = new Journal(this.game, this);
    this.skills = new Skills(this.game, this);
    this.equipment = new Equipment(this.game, this, data.equippedItems, data.inventoryItems);
    this.movingSpeed = 7;
    this.isMoving = false;
    this.direction = 'down';
    this.isAlive = true;
    this.canMove = true;
    this.canMoveUp = true;
    this.canMoveDown = true;
    this.canMoveLeft = true;
    this.canMoveRight = true;
    this.canToggleWindow = true;
    this.canStartEncounter = true;
    this.levelUpExpRequirements = [0, 1000, 2000, 3000, 4000, 5000];
    this.battleSkills = [];
    this.game.input.subscribeSignal('tDown', this.printTime, this);
    this.deathFog = new Image();
    this.deathFog.src = 'img/gray_bg.png';
    this.game.player = this;
  }
  update(Layer1, HUDLayer) {
    if (this.canMove) {
      this.blockOnSceneEdge()
      if (this.game.input.keyboard.arrowLeft.isDown && this.canMoveLeft) {
        this.movePlayer('left', 'walkingLeft');
      }
      else if (this.game.input.keyboard.arrowUp.isDown && this.canMoveUp) {
        this.movePlayer('up', 'walkingUp');
      }
      else if (this.game.input.keyboard.arrowRight.isDown && this.canMoveRight) {
        this.movePlayer('right', 'walkingRight');
      }
      else if (this.game.input.keyboard.arrowDown.isDown && this.canMoveDown) {
        this.movePlayer('down', 'walkingDown');
      }
      else {
        this.isMoving = false;
      }
    }
    this.currentAnimation.update(Layer1);
    this.fightStatistics.update(HUDLayer);
    this.journal.update(HUDLayer);
    this.skills.update(HUDLayer);
    this.equipment.update(HUDLayer);
  }
  createAnimations() {
    this.animations.set('walkingLeft', new Animation(this.spriteSheet, 16, 1, this));
    this.animations.set('walkingRight', new Animation(this.spriteSheet, 16, 2, this));
    this.animations.set('walkingUp', new Animation(this.spriteSheet, 16, 3, this));
    this.animations.set('walkingDown', new Animation(this.spriteSheet, 16, 0, this));
    this.currentAnimation = this.animations.get('walkingDown');
  }
  printTime() {
    this.game.console.addMessage(this.game.time.printCurrentTime());
    throttleProperty(this, "canToggleWindow", false, 500);
  }
  movePlayer(direction, animation) {
    this.direction = direction;
    this.currentAnimation = this.animations.get(animation);
    this.isMoving = true;
    if (direction === 'up') {
      this.rectShape.y -= this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', 0, this.movingSpeed);
      this.lastMove.y = -this.movingSpeed;
    }
    else if (direction === 'right') {
      this.rectShape.x += this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', -this.movingSpeed, 0);
      this.lastMove.x = this.movingSpeed;
    }
    else if (direction === 'down') {
      this.rectShape.y += this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', 0, -this.movingSpeed);
      this.lastMove.y = this.movingSpeed;
    }
    else if (direction === 'left') {
      this.rectShape.x -= this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', this.movingSpeed, 0);
      this.lastMove.x = -this.movingSpeed;
    }
  }
  blockOnSceneEdge() {
    if (this.rectShape.x + this.rectShape.width > this.game.sceneManager.currentScene.width) {
      this.canMoveRight = false;
    }
    else {
      this.canMoveRight = true;
    }
    if (this.rectShape.x < 0) {
      this.canMoveLeft = false;
    }
    else {
      this.canMoveLeft = true;
    }
    if (this.rectShape.y + this.rectShape.width + 20 > this.game.sceneManager.currentScene.height) {
      this.canMoveDown = false;
    }
    else {
      this.canMoveDown = true;
    }
    if (this.rectShape.y < 0) {
      this.canMoveUp = false;
    }
    else {
      this.canMoveUp = true;
    }
  }
  setPosition(x, y) {
    this.rectShape.x = x;
    this.rectShape.y = y;
    this.game.sceneManager.currentScene.translateLayer('Layer1', 960 / 2 - x, 704 / 2 - y);
  }
  addExperiencePoints(points) {
    this.exp += points;
    if (this.exp >= this.levelUpExpRequirements[this.level]) {
      this.levelUp();
    }
  }
  levelUp() {
    this.level++;
    this.game.console.addMessage('Awansowałeś na ' + this.level + ' poziom doświadczenia!');
    console.log('TODO: add level up statistics bonuses')
    /*this.maxHealthPoints += 50;
    this.healthPoints = this.maxHealthPoints;
    this.maxManaPoints += 10;
    this.manaPoints = this.maxManaPoints;
    this.strenght += 5;
    if (this.level == 2) {
      this.addSkill("Wir Ciosów", 10, "img/battleskill02.png", ["Siekasz wrogów jak cebulkę.","",""]);
    }
    */
  }
  loseConsciousness() {
    this.isAlive = false;
    this.game.console.addMessage('Staciłeś przytomność!');
  }
  addBattleSkill(name ,manaCost, sprite, description, index) {
    const skill = new BattleSkill(name, manaCost, sprite, description, index);
    this.battleSkills.push(skill);
  }
}

export default Player;
