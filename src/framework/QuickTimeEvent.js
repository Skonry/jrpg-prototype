class QuickTimeEventSequence {
  constructor(game, x, y, sequence, timeReaction) {
    this.x = x;
    this.y = y;
    this.sequence = sequence;
    this.timeReaction = timeReaction;
    this.currentEventIndex = 0;
    this.timeCounter =0;
    this.isActiv = false;
    this.keyCodes = [];
    for (const item of sequence) {
      this.keyCodes.push(item.charCodeAt(0));
    }
    this.fillColor = 'black';
    this.circleAngle = 360;
    this.circleX;
    this.circleY;
    this.status = 'reaction';
    this.setRandomPosition();
  }
  advance() {
    this.currentEventIndex++;
    if (this.currentEventIndex >= this.sequence.length) {
      this.isActiv = false;
      return;
    }
    this.timeCounter = 0;
    this.status = 'reaction';
    this.fillColor = 'black';
    this.setRandomPosition();
  }
  update() {
    if (this.isActiv) {
      if (this.status === 'reaction') {
        this.timeCounter++;
        const gameInterval = 17;
        this.circleAngle = Math.round(360 - (this.timeCounter * gameInterval * 360 / this.timeReaction));
        if (this.timeCounter * gameInterval > this.timeReaction) {

          // give player feedback on fail
          this.onFail();
        }
        console.log('TODO: check keys for QTE');

        // give player feedback on success
          this.onSuccess();
        }
        this.draw();
      }
    }
  }
  onSuccess() {
    this.fillColor = 'rgb(0,255,0)';
    this.status = 'success';
    setTimeout(() => this.advance(), 1000);
  }
  onFail() {
    this.fillColor = 'red';
    this.circleAngle = 360;
    this.status = 'fail';
    setTimeout(() => this.advance(), 1000);
  }
  draw(ctxHUD) {
    if (this.isActiv) {
      ctxHUD.save();
      ctxHUD.lineWidth = 10;
      ctxHUD.fillStyle = this.fillColor;
      ctxHUD.strokeStyle = this.fillColor;
      this.circleX = this.x + (ctxHUD.measureText(this.sequence[this.currentEventIndex]).width / 2);
      this.circleY = this.y - 12;
      ctxHUD.beginPath();
      ctxHUD.arc(this.circleX, this.circleY, 100, 0, this.circleAngle * Math.PI / 180);
      ctxHUD.stroke();
      ctxHUD.font = '50px Georgia';
      ctxHUD.fillText(this.sequence[this.currentEventIndex], this.x, this.y);
      ctxHUD.restore();
    }
  }
  setRandomPosition() {
    this.x = randomNumber(960 - 200) + 100;
    this.y = randomNumber(704 - 200) + 100;
  }
}
