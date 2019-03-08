class RenderManager {
  constructor(game, width, height, domContainer) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    if (domContainer) {
      this.domContainer = document.getElementById(domContainer);
    }
    else {
      this.domContainer = document.body;
    }
    this.domContainer.appendChild(this.canvas);
  }
  render() {
    for (const layer of this.game.sceneManager.currentScene.layers) {
      this.context.drawImage(layer.canvas, layer.x, layer.y, layer.canvas.width, layer.canvas.height);
      layer.context.clearRect(layer.x, layer.y, layer.canvas.width, layer.canvas.height);
    }
  }
}

export default RenderManager;
