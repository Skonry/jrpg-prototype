import Button from '../framework/guiElements/Button.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';

const openingChestScene = {
  init() {
    this.alpha = 0;
    this.returnButton = new Button (40, 610, 160, 80, "img/btn_back.png");
    this.leftArrowSprite = new Image();
    this.leftArrowSprite.src = 'img/left_arrow.png';
    this.rightArrowSprite = new Image();
    this.rightArrowSprite.src = 'img/right_arrow.png';
    this.addCanvasLayer('Layer1');
  },
  enter(chest) {
    this.chest = chest;
    this.alpha = 0;
    this.playerMoves = [];
    this.opened = false;
    this.game.player.canMove = false;
    this.game.player.canToggleWindow = false;
    for (let i = 0; i < this.game.player.equipment.inventory.itemSlots.length; i++) {
      if (
        this.game.player.equipment.inventory.itemSlots[i].item &&
        this.game.player.equipment.inventory.itemSlots[i].item.type === 'lockpick'
      ) {
        this.slotWithLockpicks = this.game.player.equipment.inventory.itemSlots[i];
        break;
      }
    }
    this.playerLockpiks = this.slotWithLockpicks ? this.slotWithLockpicks.stackAmount : 0;
    this.addSignalListeners(
      {click: this.onClick, arrowLeftDown: this.onArrowLeftDown, arrowRightDown: this.onArrowRightDown}
    );
  },
  update({Layer1}) {
    this.alpha += 0.05;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
    if (this.playerMoves.length === this.chest.openingCode.length && !this.opened) {

      this.game.console.addMessage('Udało ci się otworzyć zamek!');
      this.opened = true;
    }
    this.draw(Layer1);
  },
  exit() {
    this.removeSignalListeners();
    this.game.player.canMove = true;
    this.game.player.canToggleWindow = true;

    // aktualizacja ilości wytrychów w ekwipunku gracza
    if (this.slotWithLockpicks) {
      this.slotWithLockpicks.stackAmount = this.playerLockpiks;
    }

    // jeśli skrzynia została otwarta, to usuń ją z mapy
    if (this.opened) {
      const index = this.game.sceneManager.previousScene.chests.findIndex((chest) => chest === this.chest);
      this.game.sceneManager.previousScene.chests.splice(index, 1);
    }
  },
  methods: {
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.returnButton)) {
        this.game.sceneManager.changeCurrentScene(
          'startLevel',
          {playerPositionX: this.game.player.rectShape.x , playerPositionY: this.game.player.rectShape.y}
        );
      }
    },
    onArrowLeftDown() {
      this.updateMove('left');
    },
    onArrowRightDown() {
      this.updateMove('right');
    },
    draw(Layer1) {
      Layer1.fillStyle = 'black';
      Layer1.fillRect(0, 0, 960, 704);
      if (this.playerMoves.length > 0) {
        const centerElement = Math.floor(this.playerMoves.length / 2);
        const centerElementXPosition = 375 - (this.playerMoves.length % 2 === 0 ? 0 : 55);
        Layer1.save();
        Layer1.fillStyle = 'rgb(99, 92, 142)';
        Layer1.globalAlpha = 0.5;
        Layer1.fillRect(
          centerElementXPosition - centerElement * 110 + 50,
          280,
          (this.playerMoves.length + 1) * 110,
          140
        );
        Layer1.restore();

        // rysowanie ruchów gracza
        for (let i = 0; i < this.playerMoves.length; i++) {
          if (this.playerMoves[i] === 'left') {
            Layer1.drawImage(this.leftArrowSprite, centerElementXPosition + (i + 1 - centerElement) * 110, 300);
          }
          else {
            Layer1.drawImage(this.rightArrowSprite, centerElementXPosition + ( i + 1 - centerElement) * 110, 300);
          }
        }
      }
      this.game.console.draw(Layer1);

      // rysowanie ilości wytrychów gracza
      Layer1.save();
      Layer1.fillStyle = 'white';
      Layer1.font = '45px Georgia';
      Layer1.fillText('Ilość wytrychów w plecaku: ' + this.playerLockpiks, 200, 60);
      Layer1.restore();

      // przycisk do wyjścia
      Layer1.drawImage(
        this.returnButton.sprite,
        this.returnButton.x,
        this.returnButton.y,
        this.returnButton.width,
        this.returnButton.height
      );
    },
    updateMove(playerMove) {

      // gracz nie ma wytrychów
      if (this.playerLockpiks === 0) {
        this.game.console.addMessage('Brak wytrychów w plecaku!');
        return;
      }

      // ruch gracza był prawidłowy
      if (playerMove === this.chest.openCode[this.playerMoves.length]) {
        this.playerMoves.push(playerMove);

        /*
        // wcześniejszy dźwięk jeszcze się nie skończył - zrestartuj go
        if (!sounds.chest1.ended) {
          sounds.chest1.currentTime = 0;
        }
        sounds.chest1.play();
        */
        this.game.console.addMessage('Dobrze.');
      }

      // ruch gracza nie był prawidłowy
      else {
        this.playerMoves = [];
        this.game.console.addMessage('Ups... Pomyłka.');

        // test umiejętności otwierania zamków - nieudany powoduje utratę wytrychu
        if (!this.game.player.skills.skillCheck('openLocks')) {
          this.playerLockpiks--;
          this.game.console.addMessage('Złamał ci się wytrych!');
        }
      }
    }
  }
};

export default openingChestScene;
