const fightIntroScene = {
  init() {
    this.counter = 0;
    this.alpha = 0;
    this.text = 'Walka';
    this.addCanvasLayer('Layer1');
    /*this.game.player.canMove = false;
    this.game.player.canToggleWindow = false;
    this.game.player.moveVariableInFight = 0;
    this.game.player.moveLeftInFight = false;
    this.game.player.moveRightInFight = false;
    */
  },
  enter(encounter) {
    this.encounter = encounter;
  },
  update({Layer1}) {
    this.alpha += 0.01;
    if (this.alpha > 1) {
      this.game.sceneManager.changeCurrentScene('fightScene', this.encounter);
    }
    this.draw(Layer1);
  },
  methods: {
    draw(Layer1) {
      Layer1.fillStyle = 'rgb(255,255,255)';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'rgb(0,0,0)';
      Layer1.font = '70px Georgia';
      Layer1.shadowColor = 'rgb(77, 193, 214)';
      Layer1.shadowOffsetX = 5;
      Layer1.shadowOffsetY = 5;
      Layer1.shadowBlur = 20;
      const textLength = Math.round(Layer1.measureText(this.text).width);
      Layer1.fillText(this.text , (960 - textLength) / 2, 360);
    }
  }
};

export default fightIntroScene;
