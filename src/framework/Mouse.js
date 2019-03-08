class Mouse {
  constructor(dispatchSignal) {
      this.dispatchSignal = dispatchSignal;
      this.x = 0;
      this.y = 0;
    }
    processInput(input) {
      this.x = input.x;
      this.y = input.y;
      const coordinates = {x: input.x, y: input.y};
      if (input.type === 'click') {
        this.dispatchSignal('click', coordinates);
      }
      else if (input.type === 'dbclick') {
        this.dispatchSignal('doubleClick', coordinates)
      }
      else if (input.type === 'mousemove') {
        this.dispatchSignal('mouseMove', coordinates);
      }
      else if (input.type === 'mousedown') {
        this.dispatchSignal('mouseDown', coordinates);
      }
      else if (input.type === 'mouseup') {
        this.dispatchSignal('mouseUp', coordinates);
      }
    }
}

export default Mouse;
