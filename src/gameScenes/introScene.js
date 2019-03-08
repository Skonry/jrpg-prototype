const introScene = {
  init(game) {
    this.texts = ['Miejsce na intro,','miejsce na intro2,','miejsce na intro3,'];
    this.currentTextIndex = 0;
    this.alpha = 1;
    this.fadeIn = true;
    this.fadeOut = false;
    this.counter = 0;
    const Layer1 = this.addCanvasLayer('Layer1');
    Layer1.font = '50px Georgia';
    Layer1.shadowColor = 'rgb(91, 47, 145)';
    Layer1.shadowOffsetX = 4;
    Layer1.shadowOffsetY = 4;
    Layer1.shadowBlur = 8;
  },
  enter() {
    this.addSignalListeners({click: this.skipSlide, spaceDown: this.skipSlide});
  },
  exit() {
    this.removeSignalListeners();
  },
  update({Layer1}) {
    this.draw(Layer1);
    if (this.currentTextIndex >= this.texts.length) {
      this.game.sceneManager.changeCurrentScene('chooseName');
    }
    if (this.fadeIn) {
      this.fadeInText();
    }
    else if (this.fadeOut) {
      this.fadeOutText();
    }
    this.counter++;
    if (this.counter >= 120) {
      this.fadeOut = true;
    }
  },
  methods: {
    draw(Layer1) {
      Layer1.fillStyle = 'black';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.fillStyle = 'white';
      Layer1.save();
      Layer1.globalAlpha = this.alpha;
      const textLength = Math.round(Layer1.measureText(this.texts[this.currentTextIndex]).width);
      Layer1.fillText(this.texts[this.currentTextIndex], (960 - textLength) / 2, 350);
      Layer1.restore();
    },
    skipSlide() {
      this.currentTextIndex++;
      this.alpha = 0;
      this.fadeOut = false;
      this.counter = 0;
      this.fadeIn = true;
    },
    fadeInText() {
      this.alpha += 0.02;
      if (this.alpha >= 1) {
        this.alpha = 1;
        this.fadeIn = false;
      }
    },
    fadeOutText() {
      this.alpha -= 0.02;
      if (this.alpha <= 0) {
        this.skipSlide();
      }
    }
  }
};

export default introScene;
