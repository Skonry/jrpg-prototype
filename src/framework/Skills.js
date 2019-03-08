import randomNumber from './utils/randomNumber.js';

class Skills {
  constructor(game, player) {
    this.game = game;
    this.player = player
    this.sprite = new Image();
    this.sprite.src = 'img/umyjkibg.png';
    this.isOpen = false;
    this.values = {
      openLocks: 35,
      persuasion: 35,
      intimidation: 35
    };
    this.game.input.subscribeSignal('sDown', this.toggle, this);
  }
  setSkillValue(skill, value) {
    this.values[skill] = value;
  }
  modifySkillValue(skill, value) {
    this.values[skill] += value;
  }
  skillCheck(skill) {
    const rand = randomNumber(100) + 1;
    console.log('Skill test result: ' + rand);
    if (rand <= this[skill]) {
      return true;
    }
    else {
      return false;
    }
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.player.canMove = false : this.player.canMove = true;
  }
  update(HUDLayer) {
    if (this.isOpen) {
      this.draw(HUDLayer);
    }
  }
  draw(HUDLayer) {
    HUDLayer.font = '35px Georgia';
    HUDLayer.drawImage(this.sprite, 50, 120);
    HUDLayer.fillStyle = 'rgb(255,255,255)';
    HUDLayer.fillText('Otwieranie zamków:  ' + this.values.openLocks, 70, 240);
    HUDLayer.fillText('Perswazja:  ' + this.values.persuasion, 70, 280);
    HUDLayer.fillText('Zastraszanie:  ' + this.values.intimidation, 70, 320);
  }
}

export default Skills;
