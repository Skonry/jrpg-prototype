import InventoryGrid from './InventoryGrid.js';
import Item from './Item.js';
import pointInsideRectangle from './utils/pointInsideRectangle.js';

class Equipment {
  constructor(game, player, loadedEquippedItems, loadedInventoryItems) {
    this.game = game;
    this.player = player;
    this.isOpen = false;
    this.inventory = new InventoryGrid(
      this.game, 600, 100, 8, 220, 300, 500, 'img/eq.png',
      {width: 64, height: 64, margin: 6, rowsNumber: 4, columnsNumber: 4}
    );
    this.equippedItemsSlots = this.equippedItemsSlots();
    this.game.input.subscribeSignal('iDown', this.toggle, this);
    this.game.input.subscribeSignal('doubleClick', this.onMouseDoubleClick, this);
    this.game.input.subscribeSignal('mouseMove', this.onMouseMove, this);
    this.game.input.subscribeSignal('mouseDown', this.onMouseDown, this);
    this.game.input.subscribeSignal('mouseUp', this.onMouseUp, this);
    this.grabbedItem = null;
    this.grabbedItemFrom = null;
    this.grabbedItemIndex = null; // 0-helm 1-armor 2-boots 3-weapon 4-shield
    loadedEquippedItems.forEach(item => {
      const itemData = this.game.dataManager.getItemData(item.type, item.id);
      this.equipItem(new Item(itemData));
    });
    loadedInventoryItems.forEach(item => {
      const itemData = this.game.dataManager.getItemData(item.type, item.id);
      this.addItemToInventory(new Item(itemData), item.stackAmount);
    });
  }
  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.player.canMove = false : this.player.canMove = true;
  }
  update(ctx) {
    if (this.isOpen) {
      this.draw(ctx);
    }
  }
  draw(ctx) {
    this.inventory.draw(ctx);
    for (let i = 0; i < this.equippedItemsSlots.length; i++) {
      const item = this.equippedItemsSlots[i].item;
      if (item === null) continue;
      if (item.isFloating) {
        ctx.drawImage(item.sprite, this.game.input.mouse.x - 30, this.game.input.mouse.y - 30, 60, 60);
      }
      else {
        ctx.drawImage(item.sprite, this.equippedItemsSlots[i].x, this.equippedItemsSlots[i].y, 60, 60);
      }
    }
  }
  addItemToInventory(item) {
    const slotIndex = this.findSlotForItem(item, stackSize = 1);
    this.inventory.itemSlots[slotIndex].item = item;
    if (item.stackable) {
      this.inventory.itemSlots[slotIndex].stackAmount += stackSize;
    }
    this.game.console.addMessage('Dodano ' + item.name + 'do ekwipunku');
  }
  removeItemFromInventory(item) {
    for (let i = 0; i < this.inventory.itemSlots.length; i++) {
      if (this.inventory.itemSlots[i].item === item) {
        if (item.stackable && this.inventory.itemSlots[i].stackAmount > 1) {
          this.inventory.itemSlots[i].stackAmount--;
        }
        else {
          this.inventory.itemSlots[i].item = null;
          this.inventory.itemSlots[i].stackAmount = 0;
        }
      }
    }
  }
  findSlotForItem(item) {

    // check if there is already item with the same type, if item is stackable
    if (item.stackable) {
      for (let i = 0; i < this.inventory.itemSlots.length; i++) {
        if (this.inventory.itemSlots.name === item.name) {
          return i;
        }
      }
    }

    // check for empty slot
    for (let i = 0; i < this.inventory.itemSlots.length; i++) {
      if (this.inventory.itemSlots[i].item === null) {
        return i;
      }
    }
    this.game.console.addMessage('Brak miejsca w ekwipunku!');
    return -1;
  }
  drinkHealthPotion(item, index) {
    let hpBonus = item.bonus;
    let fullRecover = '';
    if (this.player.fightStatistics.currentHealthPoints > this.player.fightStatistics.maxHealthPoints) {
      hpBonus = this.player.fightStatistics.maxHealthPoints + hpBonus - this.player.fightStatistics.currentHealthPoints;
      fullRecover = 'Jesteś już w pełni zdrowia!';
    }
    this.player.fightStatistics.currentHealthPoints += hpBonus;
    this.game.console.addMessage('Wypito miksturę i przywrócono ' + hpBonus + ' punktów zdrowia. ' + fullRecover);
    if (this.inventory.itemSlots[index].stackAmount === 1) {
      this.inventory.itemSlots[index].stackAmount--;
      this.inventory.itemSlots[index].item = null;
    }
    else {
      this.inventory.itemSlots[index].stackAmount--;
    }
  }
  drinkManaPotion(item, index) {
    let manaBonus = item.bonus;
    let fullMana = '';
    if (this.player.fightStatistics.currentManaPoints > this.player.fightStatistics.maxManaPoints) {
      manaBonus = this.player.fightStatistics.maxManaPoints + manaBonus - this.player.fightStatistics.currentManaPoints;
      fullMana = 'Twój zasób many jest już pełny!';
    }
    this.player.fightStatistics.currentManaPoints += manaBonus;
    this.game.console.addMessage('Wypito miksturę i przywrócono ' + manaBonus + ' punktów many. ' + fullMana);
    if (this.inventory.itemSlots[index].stackAmount === 1) {
      this.inventory.itemSlots[index].stackAmount--;
      this.inventory.itemSlots[index].item = null;
    }
    else {
      this.inventory.itemSlots[index].stackAmount--;
    }
  }
  onMouseDoubleClick({x, y}) {
    if (this.isOpen && this.game.sceneManager.currentScene.name !== 'shopScene') {
      for (let i = 0; i < this.inventory.itemSlots.length; i++) {
        if (pointInsideRectangle(x, y, this.inventory.itemSlots.length)) {
          if (this.inventory.itemSlots[i].item.type === 'potion_health') {
            this.drinkHealthPotion(this.inventory.itemSlots[i].item, i);
          }
          else if (this.inventory.itemSlots[i].item.type === 'potion_mana') {
            this.drinkHealthPotion(this.inventory.itemSlots[i].item, i);
          }
        }
      }
    }
  }
  onMouseMove({x, y}) {
    if (!this.isOpen) return;

    // check if mouse cursor hover some item
    let hoverOverItem = false;
    for (let i = 0; i < 5; i++) {
      if (this.equippedItemsSlots[i].item !== null) {
        if (pointInsideRectangle(x, y, this.equippedItemsSlots[i])) {
          this.inventory.hoveredItem = this.equippedItemsSlots[i].item;
          hoverOverItem = true;
        }
      }
    }
    for (let i = 0; i < this.inventory.itemSlots.length; i++) {
      if (pointInsideRectangle(x, y, this.inventory.itemSlots[i])) {
        this.inventory.hoveredItem = this.inventory.itemSlots[i].item;
        hoverOverItem = true;
      }
    }
    if (!hoverOverItem) {
      this.inventory.hoveredItem = null;
    }
  }
  onMouseDown({x, y}) {
    if (!this.isOpen) return;

    // check if mouse down event is over some equipped item
    if (y < 310) {
      for (let i = 0; i < 5; i++) {
        if (this.equippedItemsSlots[i].item !== null) {
          if (pointInsideRectangle(x, y, this.equippedItemsSlots[i].item)) {
            this.grabbedItemFrom = 'equippedItems';
            this.grabbedItem = this.equippedItemsSlots[i].item;
            this.grabbedItem.isFloating = true;
            this.grabbedItemIndex = i;
            break;
          }
        }
      }
    }

    // check if mouse down event is over some inventory item
    else {
      for (let i = 0; i < this.inventory.itemSlots.length; i++) {
        if (this.inventory.itemSlots[i].item !== null) {
          if (pointInsideRectangle(x, y, this.inventory.itemSlots[i])) {
            this.grabbedItemFrom = 'inventoryItems';
            this.grabbedItem = this.inventory.itemSlots[i].item;
            this.grabbedItemIndex = i;
            this.grabbedItem.isFloating = true;
          }
        }
      }
    }
  }
  onMouseUp({x, y}) {
    /*if (
      this.activDialogBox &&
      this.activDialogBox.answerState &&
      pointInsideRectangle(x, y, {x: 152, y: 496 + (this.activDialogBox.hoverAnswer - 1) * 28, width: 696, height: 28})
    ) {
      this.activDialogBox.onChooseAnswer(this.activDialogBox.hoverAnswer - 1);
    }
    */
    if (this.grabbedItem === null) return;

    // check if item was dropped on allowed position
    //let foundAllowedPosition = false;
    if (this.grabbedItemFrom === 'inventory') {
      for (let i = 0; i < this.equippedItemsSlots.length; i++) {
        if (pointInsideRectangle(x, y, this.equippedItemsSlots[i])) {
          if (this.equippedItemsSlots[i].type !== this.grabbedItem.type) {
            this.game.console.addMessage('Item do not match slot type');
          }
          else if (this.equippedItemsSlots[i].item === null) {
            this.inventory.itemSlots[this.grabbedItemIndex].item = null;
            this.equipItem(this.grabbedItem.type, this.grabbedItem);
          }
          else {
            this.game.console.addMessage('This slot is not empty');
          }
          break;
        }
      }
      //if (!foundAllowedPosition) {
        /*for (let i = 0; i < this.game.player.equipment.itemSlots.length; i++) {
          if (pointInsideRectangle(x, y, this.game.player.equipment.itemSlots[i])) {
            if (!this.game.player.equipment.itemSlots[i].empty) {
            //  foundAllowedPosition = false;
              break;
            }
            else {
            //  foundAllowedPosition = true;
              this.game.player.equipment.itemSlots[this.grabbedItem.slotPosition].empty = true;
              this.game.player.equipment.itemSlots[i].stackAmount = this.game.player.equipment.itemSlots[this.grabbedItem.slotPosition].stackAmount;
              this.game.player.equipment.itemSlots[this.grabbedItem.slotPosition].stackAmount = 0;
              this.game.player.equipment.itemSlots[i].empty = false;
              this.grabbedItem.slotPosition = i;
              break;
            }
          }
        }*/
      //}
    }
    else if (this.grabbedItemFrom === 'equippedItems') {
      for (let i = 0; i < this.inventory.itemSlots.length; i++) {
        if (pointInsideRectangle(x, y, this.inventory.itemSlots[i])) {
          if (this.inventory.itemSlots[i].item) {
            this.game.console.addMessage('This slot is not empty');
          }
          else {
            this.equippedItemsSlots[this.grabbedItemIndex].item = null;
            this.inventory.itemSlots[i].item = this.grabbedItem;
          }
          break;
        }
      }
    }
    this.grabbedItem.isFloating = false;
    this.grabbedItem = null;
    this.grabbedItemFrom = null;
    this.grabbedItemIndex = null;
  }
  equipItem(type, item) {
    for (let i = 0; i < this.equippedItemsSlots.length; i++) {
      if (this.equippedItemsSlots[i].item.type === type) {
        this.equippedItemsSlots[i].item = item;
      }
    }
  }
  equippedItemsSlots() {
    const slots = []
    const helm = {
      x: 720,
      y: 101,
      width: 64,
      height: 64,
      empty: true,
      type: 'helm',
      item: null
    };
    slots.push(helm);
    const armor = {
      x: 720,
      y: 173,
      width: 64,
      height: 64,
      empty: true,
      type: 'armor',
      item: null
    };
    slots.push(armor);
    const boots = {
      x: 720,
      y: 245,
      width: 64,
      height: 64,
      empty: true,
      type: 'boots',
      item: null
    };
    slots.push(boots);
    const weapon = {
      x: 632,
      y: 161,
      width: 64,
      height: 64,
      empty: true,
      type: 'weapon',
      item: null
    };
    slots.push(weapon);
    const shield = {
      x: 814,
      y: 161,
      width: 64,
      height: 64,
      empty: true,
      type: 'shield',
      item: null
    };
    slots.push(shield);
    return slots;
  }
}

export default Equipment;
