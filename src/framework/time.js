const time = {
  timeCounter: null,
  days: null,
  hours: null,
  minutes: null,
  printCurrentTime() {
    let minutes;
    let hours;
    let days = this.days + 1;
    this.minutes <= 9 ? minutes = '0' + this.minutes : minutes = this.minutes;
    this.hours <= 9 ? hours = '0' + this.hours : hours = this.hours;
    return 'Dzień: ' + days + ' | Godzina: ' + hours + ':' + minutes;
  },
  update() {
    this.timeCounter++;
    this.days = Math.floor(this.timeCounter / 47520);
    this.hours = Math.floor(this.timeCounter / 1980) - 24 * this.days;
    this.minutes = Math.floor(this.timeCounter / 33) - 60 * (this.hours + 24 * this.days);
  },
  init(timeCounter = 0) {
    this.timeCounter = timeCounter;
  },
  skipHours(hours) {
    this.timeCounter += hours * 1980;
  }
}

export default time;
