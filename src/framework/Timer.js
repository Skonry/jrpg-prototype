class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.delay = delay;
    this.timerId = setTimeout(callback, delay);
    this.startTime = Date.now();
    this.pauseTime = null;
    this.isRunning = true;
  }
  pause() {
    if (!this.isRunning) return;
    this.pauseTime = Date.now();
    clearTimeout(this.timerId);
  }
  resume() {
    if (this.isRunning) return;
    this.timerId = setTimeout(this.callback, this.delay - (this.pauseTime - this.startTime));
  }
}

export default Timer;
