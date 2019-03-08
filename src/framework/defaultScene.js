import CanvasLayer from './CanvasLayer.js';

const defaultScene = {
  layers: [new CanvasLayer('layer')],
  sceneEntities: [],
  update({layer}) {
    layer.font = '50px Georgia';
    layer.fillText('The current scene is not set', 100, 100);
  },
  exit() {
    // empty function
  }
};

export default defaultScene;
