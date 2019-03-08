import defaultScene from './defaultScene.js'
import Scene from './Scene.js';

class SceneManager {
  constructor(game) {
    this.game = game;
    this.scenes = new Map();
    this.currentScene = defaultScene;
    this.previousScene = null;
    this.storagedScene = null;
  }
  addScene(name, sceneObject) {
    this.scenes.set(name, new Scene(this.game, name, sceneObject));
  }
  changeCurrentScene(name, args, storageCurrentScene) {
    this.currentScene.exit();
    if (storageCurrentScene) {
      this.storagedScene = this.currentScene;
    }
    this.previousScene = this.currentScene;
    if (name === 'loadStoragedScene') {
      this.currentScene = this.storagedScene;
    }
    else {
      this.currentScene = this.scenes.get(name);
    }
    this.currentScene.enter(args);
  }
  returnToPreviousScene(args) {
    if (this.previousScene) {
      this.currentScene.exit();
      this.currentScene = this.previousScene;
      this.previousScene = null;
      this.currentScene.enter(args);
    }
  }
  update() {
    const contexts = {};
    for (let i = 0; i < this.currentScene.layers.length; i++) {
      const layer = this.currentScene.layers[i];
      contexts[layer.name] = layer.context;
    }
    this.currentScene.update(contexts);
    for (let i = 0; i < this.currentScene.sceneEntities.length; i++) {
      this.currentScene.sceneEntities[i].update(contexts);
    }
  }
}

export default SceneManager;
