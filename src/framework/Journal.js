class Journal {
  constructor(game, player) {
    this.game = game;
    this.player = player;
    this.isOpen = false;
    this.game.input.subscribeSignal('qDown', this.toggle, this);
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.player.canMove = false : this.player.canMove = true;
  }
  update(HUDLayer) {
    if (this.isOpen) {
      this.draw(HUDLayer);
    }
  }
  draw(HUDLayer) {
    HUDLayer.fillText('Aktywne zadania:', 50, 170);
    for (let i = 0; i < this.game.quests.length; i++) {
      if (this.game.quests[i].status === 'active') {
        HUDLayer.fillText('*' + this.game.quests[i].name + ' - ' +
          this.game.quests[i].objectives[this.game.quests[i].currentObjectiveIndex].desciption +
          ' - (' + this.game.quests[i].aimCounter +
          '/' + this.game.quests[i].objectives[this.game.quests[i].currentObjectiveIndex].number +
          ')', 50, 220 + i * 40);
      }
    }
  }
}

export default Journal;
