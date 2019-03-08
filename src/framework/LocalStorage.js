class LocalStorage {
  saveGameState(game) {
    localStorage.setItem('playerName', game.player.name);
    localStorage.setItem('playerGender', game.player.gender);
    localStorage.setItem('playerPositionX', game.player.rectShape.x);
    localStorage.setItem('playerPositionY', game.player.rectShape.y);
    localStorage.setItem('playerFightStatistics', JSON.stringify(game.player.fightStatistics.statistics));
    localStorage.setItem('playerGold', game.player.gold);
    localStorage.setItem('playerExp', game.player.exp);
    localStorage.setItem('playerLevel', game.player.level);
    for (let i = 0; i < game.player.equipment.inventory.itemSlots.length; i++) {

      // clear old state
      localStorage.removeItem('inventoryItem' + i)
      const slot = game.player.equipment.inventory.itemSlots[i];
      if (slot.item === null) continue;
      localStorage.setItem('inventoryItem' + i, slot.item.type + ' ' + slot.item.id + ' ' + slot.stackAmount);
    }
    localStorage.setItem('inventoryItemsLength', game.player.equipment.inventory.itemSlots.length);
    for (let i = 0; i < game.player.equipment.equippedItemsSlots.length; i++) {

      // clear old state
      localStorage.removeItem('equippedItem' + i);
      const item = game.player.equipment.equippedItemsSlots[i].item;
      if (item === null) continue;
      localStorage.setItem('equippedItem' + i, item.type + ' ' + item.id);
    }
    localStorage.setItem('equippedItemsLength', game.player.equipment.equippedItemsSlots.length);
    localStorage.setItem('timeCounter', game.time.timeCounter);
    for (let i = 0; i < game.quests.length; i++) {
      localStorage.setItem(
        'quest' + i,
        game.quests[i].id + ' ' + game.quests[i].status + ' ' + game.quests[i].currentObjectiveIndex + ' ' + game.quests[i].aimCounter
      );
    }
    localStorage.setItem('questsLength', game.quests.length);
    console.log('Game state saved');
  }
  loadGameState() {
    const playerName = localStorage.getItem('playerName');

    // localStorage is empty
    if (!playerName) return null;

    // data loaded from storage used later for initialization objects which need that data
    const data = {
      player: {},
      quests: [],
      time: {}
    };
    data.player.name = playerName;
    data.player.gender = localStorage.getItem('playerGender');
    data.player.playerPositionX = parseInt(localStorage.getItem('playerPositionX'));
    data.player.playerPositionY = parseInt(localStorage.getItem('playerPositionY'));
    data.player.fightStatistics = JSON.parse(localStorage.getItem('playerFightStatistics'));
    data.player.gold = parseInt(localStorage.getItem('playerGold'));
    data.player.exp = parseInt(localStorage.getItem('playerExp'));
    data.player.level = parseInt(localStorage.getItem('playerLevel'));
    const inventoryItemsLength = parseInt(localStorage.getItem('inventoryItemsLength'));
    data.player.inventoryItems = [];
    for (let i = 0; i < inventoryItemsLength; i++) {
      const storageRecord = localStorage.getItem('inventoryItem' + i);
      if (!storageRecord) continue;
      const item = storageRecord.split(' ');
      const type = item.type;
      const id = parseInt(item[0]);
      const stackAmount = parseInt(item[1]);
      data.inventoryItems.push({type, id, stackAmount});
    }
    const equippedItemsLength = parseInt(localStorage.getItem('equippedItemsLength'));
    data.player.equippedItems = [];
    for (let i = 0; i < equippedItemsLength; i++) {
      const storageRecord = localStorage.getItem('equippedItem' + i);
      if (!storageRecord) continue;
      const item = storageRecord.split(' ');
      const type = item.type;
      const id = parseInt(item.id);
      data.equippedItems.push({type, id});
    }
    const questsLength = parseInt(localStorage.getItem('questsLength'));
    for (let i = 0; i < questsLength; i++) {
      const questState = localStorage.getItem('quest' + i).split(' ');
      const id = parseInt(questState[0]);
      const status = parseInt(questState[1]);
      const currentObjectiveIndex = parseInt(questState[2]);
      const aimCounter = parseInt(questState[3]);
      data.quests.push({id, status, currentObjectiveIndex, aimCounter});
    }
    data.time.timeCounter = parseInt(localStorage.getItem('timeCounter'));
    return data;
  }
}

export default LocalStorage;
