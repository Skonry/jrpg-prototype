import Button from '../framework/guiElements/Button.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';

const chooseNameScene = {
  init() {
    this.alpha = 0;
    this.playerName = '';
    this.playButton = new Button(370, 570, 240, 80, 'img/buttons/start_button.png');
    const Layer1 = this.addCanvasLayer('Layer1');
    Layer1.font = '40px Georgia';
  },
  enter() {
    this.addSignalListeners(
      {
        letterKeyDown: this.addCharacter,
        backspaceDown: this.removeCharacter,
        click: this.nextState
      }
    );
  },
  exit() {
    this.removeSignalListeners();
  },
  update({Layer1}) {
    this.draw(Layer1);
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
  },
  methods: {
    addCharacter({value}) {
      this.playerName += value;
    },
    removeCharacter() {
      this.playerName = this.playerName.slice(0, this.playerName.length - 1);
    },
    nextState({x, y}) {
      if (pointInsideRectangle(x, y, this.playButton)) {
        this.game.sceneManager.changeCurrentScene('chooseGender', {playerName: this.playerName});
      }
    },
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'rgb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.drawImage(
        this.playButton.sprite,
        this.playButton.x,
        this.playButton.y,
        this.playButton.width,
        this.playButton.height
      );
      Layer1.fillStyle = 'white';
      Layer1.fillText('Enter your character name', 230, 100);
      Layer1.fillRect(280, 400, 400, 70);
      Layer1.fillStyle = 'black';
      Layer1.fillText(this.playerName, 300, 445);
    }
  }
};

export default chooseNameScene;
