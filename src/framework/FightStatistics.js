class FightStatistics {
  constructor(game, player, statistics) {
    this.game = game;
    this.player = player;
    this.statistics = statistics;
    this.sprite = new Image();
    this.sprite.src = 'img/statystyki.png';
    this.isOpen = false;
    this.game.input.subscribeSignal('cDown', this.toggle, this);
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.player.canMove = false : this.player.canMove = true;
    this.calculateArmorPoints();
  }
  update(HUDLayer) {
    if (this.isOpen === true) {
      this.draw(HUDLayer);
    }
  }
  draw(HUDLayer) {
    HUDLayer.drawImage(this.sprite, 50, 120, 400, 550);
    HUDLayer.fillStyle = 'rgb(255,255,255)';
    HUDLayer.fillText('Poziom Postaci:  ' + this.game.player.level, 70, 240);
    HUDLayer.fillText('Punkty Doświadczenia:  ' + this.game.player.exp, 70, 280);
    HUDLayer.fillText(
      'Punkty Życia:  ' + this.statistics.currentHealthPoints + '/' + this.statistics.maxHealthPoints,
      70,
      320
    );
    HUDLayer.fillText(
      'Punkty Magii:  ' + this.statistics.currentManaPoints + '/' + this.statistics.maxManaPoints,
      70,
      360
    );
    HUDLayer.fillText('Siła:  ' + this.statistics.strenght, 70, 400);
    HUDLayer.fillText('Pancerz:  ' + this.statistics.armorPoints, 70, 440);
  }
  calculateArmorPoints() {
    let armor = 0;
    for (let i = 0; i < this.player.equipment.equippedItemsSlots.length; i++) {

      // skip weapon slot
      if (i === 3) {
        continue;
      }
      if (this.player.equipment.equippedItemsSlots[i].item) {
        armor += this.player.equipment.equippedItemsSlots[i].item.bonus;
      }
    }
    this.statistics.armorPoints = armor;
    return armor;
  }
}

export default FightStatistics;
