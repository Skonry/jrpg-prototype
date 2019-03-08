class CanvasLayer {
  constructor(name, indexOrder = 0, width = 800, height = 600, x = 0, y = 0) {
    this.name = name;
    this.indexOrder = indexOrder;
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
  }
}

export default CanvasLayer;
