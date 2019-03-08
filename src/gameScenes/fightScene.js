import Button from '../framework/guiElements/Button.js';
import PlayerDuringFight from '../framework/PlayerDuringFight.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';
import randomNumber from '../framework/utils/randomNumber.js';
import throttleProperty from '../framework/utils/throttleProperty.js';

const fightScene = {
  init() {
    this.alpha = 0;
    this.floatingTexts = [];
    this.skillDescription = null;
    this.escapeButton = new Button(40, 610, 160, 80, "img/buttons/btn_escape.png");
    this.skillDescriptionBg = new Image();
    this.skillDescriptionBg.src = 'img/item_bg.png';
    this.addCanvasLayer('Background');
    this.addCanvasLayer('Characters');
    this.addCanvasLayer('HUDLayer');
  },
  enter(encounter) {
    this.encounter = encounter;
    this.playerDuringFight = new PlayerDuringFight(this.game, this, this.game.player);
    this.floatingTexts = [];
    this.game.player.fightStatistics.calculateArmorPoints();
    for (let i = 0; i < this.encounter.numberOfEnemies; i++) {
      setTimeout(() => {
        this.encounter.encounterEnemies[i].canAttack = true;
      }, 3000 + randomNumber(2000));
    }
    this.addSignalListeners({click: this.onClick, mouseMove: this.onMouseMove});
  },
  update({Background, Characters, HUDLayer}) {
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
    this.playerDuringFight.update(Characters, HUDLayer);
    if (this.encounter.encounterEnemies.length === 0) {
      this.encounter.terminate();
      this.game.sceneManager.changeCurrentScene(
        'loadStoragedScene',
        {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
      );
    }
    if (!this.playerDuringFight.isAlive) {
      this.game.sceneManager.changeCurrentScene(
        'loadStoragedScene',
        {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
      );
    }
    for (let i = 0; i < this.floatingTexts.length; i++) {
      this.floatingTexts[i].update(HUDLayer);
    }
    this.draw(Background, HUDLayer);
    this.encounter.update(Characters);
    this.game.console.update(HUDLayer);
  },
  exit() {
    this.removeSignalListeners();
    throttleProperty(this.game.player, 'canStartEncounter', false, 3000);
  },
  methods: {
    draw(Background, HUDLayer) {
      HUDLayer.save();
      HUDLayer.font = '20px Georgia';
      HUDLayer.fillStyle = 'white';
      Background.globalAlpha = this.alpha;
      Background.drawImage(this.encounter.backgroundSprite, 0, 0, 960, 704);
      if (this.skillDescription) {
        HUDLayer.globalAlpha = 0.7;
        const x = this.game.input.mouse.x;
        const y = this.game.input.mouse.y;
        HUDLayer.drawImage(this.skillDescriptionBg, x - 110, y + 40, 440, 120);
        HUDLayer.fillText('Nazwa: ' + this.skillDescription.name, x - 105, y + 60);
        HUDLayer.fillText('Koszt many: ' + this.skillDescription.manaCost, x - 105, y + 80);
        HUDLayer.fillText('Opis: ' + this.skillDescription.description[0], x - 105, y + 100);
        HUDLayer.fillText(this.skillDescription.description[1], x - 105, y + 120);
        HUDLayer.fillText(this.skillDescription.description[2], x - 105, y + 140);
        HUDLayer.globalAlpha = 1;
      }
      HUDLayer.drawImage(this.escapeButton.sprite, this.escapeButton.x, this.escapeButton.y);
      HUDLayer.restore();
    },
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.escapeButton)) {
        this.game.console.addMessage('Uciekłeś z pola bitwy.');
        this.game.sceneManager.changeCurrentScene(
          'loadStoragedScene',
          {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
        );
      }
      if (this.playerDuringFight.canUseSkill) {
        for (let i = 0; i < this.playerDuringFight.battleSkills.length; i++) {
          if (pointInsideRectangle(x, y, this.playerDuringFight.battleSkills[i].button)) {
            this.playerDuringFight.useSkill(i);
          }
        }
      }
    },
    onMouseMove({x, y}) {
      this.skillDescription = null;
      for (let i = 0; i < this.playerDuringFight.battleSkills.length; i++) {
        if (pointInsideRectangle(x, y, this.playerDuringFight.battleSkills[i].button)) {
          this.skillDescription = this.playerDuringFight.battleSkills[i];
          break;
        }
      }
    }
  }
};

export default fightScene;
