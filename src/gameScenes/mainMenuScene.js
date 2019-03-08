import Button from '../framework/guiElements/Button.js';
import createPlayer from '../framework/createPlayer.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';

const mainMenuScene = {
  init() {
    this.alpha = 0;
    this.gameIsPaused = false;
    this.loadedData = this.game.localStorage.loadGameState();
    this.gameHasSavedState = this.game.loadedState === null ? false : true;
    this.continueGameButton = new Button(320, 90, 320, 80, 'img/buttons/continue_button.png');
    this.startNewGameButton = new Button(320, 190, 320, 80, 'img/buttons/new_game_button.png');
    this.saveGameStateButton = new Button(320, 290, 320, 80, 'img/buttons/save_game_button.png');
    this.optionsButton = new Button(320, 390, 320, 80, 'img/buttons/options_button.png');
    this.returnToGameButton = new Button(320, 490, 320, 80, 'img/buttons/return_button.png');
    this.addCanvasLayer('Layer1');
  },
  enter({gameIsPaused = false} = {}) {
    this.gameIsPaused = gameIsPaused;
    this.addSignalListeners({click: this.onClickButton, escapeDown: this.returnToGame});
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
      Layer1.fillStyle = 'rgb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      if (this.gameHasSavedState) {
        Layer1.drawImage(
          this.continueGameButton.sprite,
          this.continueGameButton.x,
          this.continueGameButton.y,
          this.continueGameButton.width,
          this.continueGameButton.height
        );
      }
      if (!this.gameIsPaused) {
        Layer1.drawImage(
          this.startNewGameButton.sprite,
          this.startNewGameButton.x,
          this.startNewGameButton.y,
          this.startNewGameButton.width,
          this.startNewGameButton.height
        );
      }
      Layer1.drawImage(
        this.optionsButton.sprite,
        this.optionsButton.x,
        this.optionsButton.y,
        this.optionsButton.width,
        this.optionsButton.height
      );
      if (this.gameIsPaused) {
        Layer1.drawImage(
          this.saveGameStateButton.sprite,
          this.saveGameStateButton.x,
          this.saveGameStateButton.y,
          this.saveGameStateButton.width,
          this.saveGameStateButton.height
        );
        Layer1.drawImage(
          this.returnToGameButton.sprite,
          this.returnToGameButton.x,
          this.returnToGameButton.y,
          this.returnToGameButton.width,
          this.returnToGameButton.height
        );
      }
    },
    onClickButton({x, y}) {
      if (pointInsideRectangle(x, y, this.continueGameButton) && !this.gameIsPaused && this.gameHasSavedState) {
        const playerData = this.game.loadedState.player;
        createPlayer(this.game, playerData);
        this.game.sceneManager.changeCurrentScene(
          'startLevel',
          {
            setPlayerPosition: true,
            playerPositionX: playerData.playerPositionX,
            playerPositionY: playerData.playerPositionY
          }
        );
      }
      else if (pointInsideRectangle(x, y, this.startNewGameButton)) {
        if (confirm('Starting a new game will delete your progress. Do you want to continue?')) {
          localStorage.clear();
          this.game.sceneManager.changeCurrentScene('intro');
        }
      }
      else if (pointInsideRectangle(x, y, this.saveGameStateButton) && this.gameIsPaused) {
        this.game.localStorage.saveGameState(this.game);
      }
      else if (pointInsideRectangle(x, y, this.returnToGameButton)) {
        this.returnToGame();
      }
    },
    returnToGame() {
      if (this.gameIsPaused) {
        this.game.sceneManager.changeCurrentScene('loadStoragedScene');
      }
    }
  }
};

export default mainMenuScene;
