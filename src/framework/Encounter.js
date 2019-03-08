import Enemy from './Enemy.js';
import randomNumber from './utils/randomNumber.js';

class Encounter {
  constructor(game, monster, numberOfEnemies, battleBackground) {
    this.game = game;
    this.backgroundSprite = new Image();
    this.backgroundSprite.src = battleBackground;
    this.pointerSprite = new Image();
    this.pointerSprite.src = 'img/pointer.png';
    this.healthBarWrapper = new Image();
    this.healthBarWrapper.src = 'img/health_bar.png';
    this.healthBar = new Image();
    this.healthBar.src = 'img/health.png';
    this.numberOfEnemies = numberOfEnemies;
    this.expPool = 0;
    this.encounterEnemies = [];
    for (let i = 0; i < numberOfEnemies; i++) {
      this.encounterEnemies.push(new Enemy(
        this.game,
        this.healthBar,
        this.healthBarWrapper,
        monster,
        i
      ));
    }
    this.pointerCounter = 0;
    this.actualTarget = this.encounterEnemies[0];
  }
  update(ctx) {
    for (let i = 0; i < this.encounterEnemies.length; i++) {
      this.encounterEnemies[i].update(ctx, i);
    }
  }
  terminate() {
    this.game.console.addMessage('Zwycięstwo! Zdobyto ' + this.expPool + ' punktów doświadczenia.');
    this.game.player.addExperiencePoints(this.expPool);
    this.generateLoot();
  }
  generateLoot() {
    const rand = randomNumber(1000) + 1;
    const lootTable = this.game.dataManager.getLootTable(this.game.player.level);
    const loot = lootTable.find(loot => loot.min >= rand && loot.max <= rand);
    if (loot) {
      const itemData = this.dataManager.getItemData(loot.type, loot.id)
      this.game.console.addMessage('Zdobyto' + itemData.name + '!');
      this.game.player.equipment.addItemToInventory(new Item(itemData));
    }
  }
}

export default Encounter;
