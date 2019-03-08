import Console from './Console.js';
import DataManager from './DataManager.js';
import domContentLoaded from './domContentLoaded.js';
import Input from './Input.js';
import LocalStorage from './LocalStorage.js';
import Quest from './Quest.js';
import RenderManager from './RenderManager.js';
import SceneManager from './SceneManager.js';
import time from './time.js';

class Game {
  constructor(width = 960, height = 704, domContainer = null) {
    this.renderManager = new RenderManager(this, width, height, domContainer);
    this.sceneManager = new SceneManager(this);
    this.input = new Input(this.renderManager.canvas);
    this.dataManager = new DataManager();
    this.localStorage = new LocalStorage();
    this.loadedState = this.localStorage.loadGameState();
    this.step = this.step.bind(this);
    this.time = time;
    this.quests = [];
    this.gameEntities = [];
    this.console = new Console();
    this.loadQuests();
    if (this.loadedState !== null) {
      this.time.init(this.loadedState.time.timeCounter);
    }
    else {
      this.time.init(0);
    }
    domContentLoaded(this.boot.bind(this));
  }
  boot() {
    requestAnimationFrame(this.step);
  }
  step(timestamp) {
    this.input.processInputsQueue();
    for (let i = 0; i < this.gameEntities.length; i++) {
      if (this.gameEntities[i].isActive) {
        this.gameEntities[i].update(this.sceneManager.currentScene.layers);
      }
    }
    this.sceneManager.update();
    this.time.update();
    this.renderManager.render(this.sceneManager.currentScene.layers);
    requestAnimationFrame(this.step);
  }
  notifyAction(message) {
    for (let i = 0; i < this.quests.length; i++) {
      this.quests[i].update(message);
    }
  }
  addScene(name, sceneObject) {
    this.sceneManager.addScene(name, sceneObject)
  }
  changeCurrentScene(name, args, storageCurrentScene) {
    this.sceneManager.changeCurrentScene(name, args, storageCurrentScene);
  }
  returnToPreviousScene(args) {
    this.sceneManager.returnToPreviousScene(args);
  }
  addGameEntity(entity) {
    if (!(typeof entity.update === 'function')) {
      throw new Error('Update function is required in a scene entity');
    }
    entity.game = this;
    entity.isActive = true;
    this.gameEntities.push(entity);
  }
  addQuest(questData, status = 'toTake', currentObjectiveIndex = 0, aimCounter = 0) {
    this.quests.push(new Quest(this, questData, status, currentObjectiveIndex, aimCounter));
  }
  loadQuests() {
    const questsData = this.dataManager.getQuestsData();
    if (this.loadedState !== null) {
      for (let i = 0; i < questsData.length; i++) {
        const questState = this.loadedState.quests[i];
        this.addQuest(questsData[i], questState.status, questState.currentObjectiveIndex, questState.aimCounter);
      }
    }
    else {
      for (let i = 0; i < questsData.length; i++) {
        this.addQuest(questsData[i]);
      }
    }
  }
}

export default Game;
