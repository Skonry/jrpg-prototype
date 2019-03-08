import displayStyledText from './utils/displayStyledText.js';
import wrapTextLines from './utils/wrapTextLines.js';

class Console {
  constructor() {
    this.sprite = new Image();
    this.sprite.src = 'img/console_bg.png';
    this.messagesList = [];
  }
  update(HUDLayer) {
    let messagesListLength = this.messagesList.length;
    if (messagesListLength > 5) {
      this.messagesList.shift();
      messagesListLength = 5;
    }
    this.draw(HUDLayer);
  }
  draw(HUDLayer) {
    HUDLayer.save();
    HUDLayer.fillStyle = 'white';
    HUDLayer.font = '18px Georgia';
    HUDLayer.drawImage(this.sprite, 260, 540, 450, 160);
    for (let i = 0; i < this.messagesList.length; i++) {
      const msg = this.messagesList[i];
      let x = 275;
      const y = i * 28 + 570;
      displayStyledText(msg, HUDLayer, x, y);
    }
    HUDLayer.restore();
  }
  addMessage(msg) {
    const msgRows = wrapTextLines(msg, 50);
    for (let i = 0; i < msgRows.length; i++) {
      this.messagesList.push(msgRows[i]);
    }
  }
}

export default Console;
