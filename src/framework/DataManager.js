import * as itemsData from './data/itemsData.js';
import * as lootTables from './data/lootTables.js';
import monstersData from './data/monstersData.js';
import questsData from './data/questsData.js';

class DataManager {
  constructor() {
    this.items = {}
    this.items.weapons = itemsData.weapons;
    this.items.shields = itemsData.shields;
    this.items.helms = itemsData.helms;
    this.items.boots = itemsData.boots;
    this.items.armors = itemsData.armors;
    this.items.potions = itemsData.potions;
    this.items.lockpicks = itemsData.lockpicks;
    this.items.pickableItems = itemsData.pickableItems;
    this.items.questItems = itemsData.questItems;
    this.quests = questsData;
    this.monsters = monstersData;
    this.lootTables = lootTables;
  }
  getItemData(type, id) {
    return this.items[type].find(item => item.id === id);
  }
  getQuestsData() {
    return this.quests;
  }
  getMonsterData(monsterName) {
    return this.monsters[monsterName];
  }
  getLootTable(playerLevel) {
    return this.lootTables['level' + playerLevel];
  }
}

export default DataManager;
