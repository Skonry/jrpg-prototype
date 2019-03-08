import Chest from './Chest.js';
import collisionDetection from './utils/collisionDetection.js';
import Encounter from './Encounter.js';
import Item from './Item.js';
import itemsData from './data/itemsData.js';
import Npc from './Npc.js';
import PickableItem from './PickableItem.js';
import randomNumber from './utils/randomNumber.js';
import Shrine from './Shrine.js';
import Teleport from './Teleport.js';
import throttleProperty from './utils/throttleProperty.js';
import Vector2 from './Vector2.js';

class Level {
  constructor(data) {
    this.data = data;
    this.methods = {
      openMainMenu: this.openMainMenu,
      draw: this.draw,
      generateEncounter: this.generateEncounter,
      generatePickableItem: this.generatePickableItem,
      createShrine: this.createShrine,
      createChests: this.createChests,
      createTeleports: this.createTeleports,
      createNpcs: this.createNpcs
    };
    this.activDialogBox = null;
  }
  update({Layer1, HUDLayer}) {
    this.draw(Layer1, HUDLayer);
    for (let i = 0; i < this.npcsOnMap.length; i++) {
      this.npcsOnMap[i].update(Layer1, HUDLayer);
    }
    if (this.activDialogBox) {
      this.activDialogBox.update(HUDLayer);
    }
    for (let i = 0; i < this.teleports.length; i++) {
      this.teleports[i].update(Layer1, HUDLayer);
    }
    for (let i = 0; i < this.chests.length; i++) {
      this.chests[i].update(Layer1, HUDLayer);
    }
    if (this.shrine) {
      this.shrine.update(Layer1, HUDLayer);
    }
    if (this.pickableItems) {
      for (let i = 0; i < this.pickableItems.length; i++) {
        if (collisionDetection(this.game.player, this.pickableItems[i]) && this.game.input.keyboard.space.isDown) {
          const item = new Item(this.pickableItems[i].itemData);
          this.game.player.equipment.addItemToInventory(item);
          break;
        }
      }
    }
    if (
      this.randomEncounterRate &&
      this.game.player.isMoving &&
      this.game.player.isAlive &&
      this.game.player.canStartEncounter
    ) {
      const rand = randomNumber(1000) + 1;
      if (rand < this.randomEncounterRate) {
        this.generateEncounter();
      }
    }
    this.game.console.update(HUDLayer);
    this.game.player.update(Layer1, HUDLayer);
  }
  init() {
    this.addCanvasLayer('HUDLayer', 100);
    this.addCanvasLayer('Layer1');
    this.map = new Image();
    this.map.src = this.spriteSrc;
    this.pickableItems = this.generatePickableItem();
    this.npcsOnMap = this.createNpcs(this.npcsOnMap);
    this.shrine = this.createShrine(this.shrine);
    this.chests = this.createChests(this.chests);
    this.teleports = this.createTeleports(this.teleports);
    this.activeNpc = null;
    this.activDialogBox = null;
  }
  enter({setPlayerPosition, playerPositionX, playerPositionY} = {}) {
    if (setPlayerPosition) {
      const layer = this.layers.find((layer) => layer.name === 'Layer1');
      layer.context.setTransform(1, 0, 0, 1, 0, 0);
      const x = playerPositionX || this.startPositionX;
      const y = playerPositionY || this.startPositionY;
      this.game.player.setPosition(x, y);
    }
    this.game.player.canMove = true;
    this.game.player.canToggleWindow = true;
    this.game.input.subscribeSignal('escapeDown', this.openMainMenu, this, 'levelOnEsapeDown');
  }
  exit() {
    this.game.input.removeSignalCallback('levelOnEsapeDown', 'escapeDown');
  }
  openMainMenu() {
    this.game.sceneManager.changeCurrentScene('mainMenu', {gameIsPaused: true}, true);
  }
  draw(Layer1, HUDLayer) {
    Layer1.save();
    Layer1.fillStyle = 'rgb(60, 127, 234)';
    Layer1.fillRect(-500, -400, this.width + 1000, this.height + 800);
    Layer1.restore();
    Layer1.drawImage(this.map, 0, 0, this.map.width, this.map.height);
  }
  generateEncounter() {
    const rand = randomNumber(this.monsters.length);
    const monsterData = this.game.dataManager.getMonsterData(this.monsters[rand]);
    const encounter = new Encounter(this.game, monsterData, 2, this.battleBackgrounds[randomNumber(1)]);
    this.game.sceneManager.changeCurrentScene('fightIntroScene', encounter, true);
  }
  generatePickableItem() {
    const pickableItems = [];
    for (let i = 0; i < 5; i++) {
      const itemData = this.game.dataManager.getItemData('pickableItems', 1);
      pickableItems.push(new PickableItem(randomNumber(this.width), randomNumber(this.height), 45, 65, itemData));
    }
    return pickableItems;
  }
  createShrine(shrineData) {
    if (shrineData) {
      return new Shrine(this.game, shrineData.x, shrineData.y);
    }
    else {
      return null;
    }
  }
  createChests(chestsData) {
    const chests = [];
    chestsData.forEach((chest) => chests.push(
      new Chest(this.game, chest.x, chest.y, chest.spriteSrc, chest.openingCodeLength)
    ));
    return chests;
  }
  createTeleports(teleportsData) {
    const teleports = [];
    teleportsData.forEach((teleport) => teleports.push(
      new Teleport(
        this.game,
        teleport.x,
        teleport.y,
        teleport.destinationScene,
        teleport.destinationLevelName,
        teleport.destinationX,
        teleport.destinationY
      )
    ));
    return teleports;
  }
  createNpcs(npcsData) {
    const npcs = [];
    npcsData.forEach((npc) => npcs.push(
      new Npc(
        this.game,
        npc.spriteSrc,
        npc.x,
        npc.y,
        npc.isStatic,
        npc.name,
        npc.questsIds,
        npc.isVendor
      )
    ));
    return npcs;
  }
}

export default Level;
