import Button from '../framework/guiElements/Button.js';
import Checkbox from '../framework/guiElements/Checkbox.js';
import createPlayer from '../framework/createPlayer.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';

const chooseGenderScene = {
  init() {
    this.alpha = 0;
    this.maleGenderCheckbox = new Checkbox(200, 400, 30, 'Male');
    this.femaleGenderCheckbox = new Checkbox(700, 400, 30, 'Female');
    this.startButton = new Button(370, 570, 240, 80, 'img/buttons/start_button.png');
    const Layer1 = this.addCanvasLayer('Layer1');
    Layer1.font = '40px Georgia';
  },
  enter({playerName}) {
    this.playerName = playerName;
    this.addSignalListeners({click: this.onClick});
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
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'gb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.save();
      Layer1.fillStyle = 'white';
      Layer1.fillText('Choose gender', 340, 390);
      Layer1.restore();
      this.maleGenderCheckbox.draw(Layer1);
      this.femaleGenderCheckbox.draw(Layer1);
      Layer1.drawImage(
        this.startButton.sprite,
        this.startButton.x,
        this.startButton.y,
        this.startButton.width,
        this.startButton.height
      );
    },
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.maleGenderCheckbox)) {
        this.maleGenderCheckbox.changeState();
        if (this.femaleGenderCheckbox.checked) {
          this.femaleGenderCheckbox.changeState();
        }
      }
      else if (pointInsideRectangle(x, y, this.femaleGenderCheckbox)) {
        this.femaleGenderCheckbox.changeState();
        if (this.maleGenderCheckbox.checked) {
          this.maleGenderCheckbox.changeState();
        }
      }
      else if (
        (this.maleGenderCheckbox.checked || this.femaleGenderCheckbox.checked) &&
        pointInsideRectangle(x, y, this.startButton)
      ) {
        const gender = this.maleGenderCheckbox.checked ? 'male' : 'female';
        createPlayer(this.game, {name: this.playerName, gender});
        this.game.sceneManager.changeCurrentScene('startLevel', {setPlayerPosition: true});
      }
    }
  }
};

export default chooseGenderScene;
