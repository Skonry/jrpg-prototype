/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var lootTables_namespaceObject = {};
__webpack_require__.r(lootTables_namespaceObject);
__webpack_require__.d(lootTables_namespaceObject, "level1", function() { return level1; });

// CONCATENATED MODULE: ./src/framework/guiElements/GuiElement.js
class GuiElement {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

/* harmony default export */ var guiElements_GuiElement = (GuiElement);

// CONCATENATED MODULE: ./src/framework/guiElements/Button.js


class Button_Button extends guiElements_GuiElement {
  constructor(x, y, width, height, sprite) {
    super(x, y, width, height);
    this.sprite = new Image();
    this.sprite.src = sprite;
  }
}

/* harmony default export */ var guiElements_Button = (Button_Button);

// CONCATENATED MODULE: ./src/framework/guiElements/Checkbox.js


class Checkbox_Checkbox extends guiElements_GuiElement {
  constructor(x, y, radius, label) {
    super(x, y, radius * 2, radius * 2);
    this.checked = false;
    this.label = label;
  }
  changeState(){
    this.checked = !this.checked;
  }
  draw(ctxHUD) {
    ctxHUD.save();
    ctxHUD.font = this.checked ? "32px Georgia" : "20px Georgia";
    ctxHUD.fillStyle = 'white';
    ctxHUD.beginPath();
    ctxHUD.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, 2 * Math.PI);
    ctxHUD.fill();
    ctxHUD.fillText(
      this.label,
      (this.x + this.width / 2) - (Math.round(ctxHUD.measureText(this.label).width / 2)),
      this.y + this.height * 2
    );
    if (this.checked) {
      ctxHUD.fillStyle = 'black';
      ctxHUD.beginPath();
      ctxHUD.arc(this.x + this.width / 2, this.y + this.height / 2, (this.width - 12) / 2, 0, 2 * Math.PI);
      ctxHUD.fill();
    }
    ctxHUD.restore();
  }
}

/* harmony default export */ var guiElements_Checkbox = (Checkbox_Checkbox);

// CONCATENATED MODULE: ./src/framework/data/defaultPlayerData.js
const defaultFightStatistics = {
  maxHealthPoints: 200,
  currentHealthPoints: 200,
  maxManaPoints: 30,
  currentManaPoints: 30,
  maxPowerPoints: 200,
  currentPowerPoints: 200,
  strenght: 15,
  armorPoints: 0
};

const defaultInventoryItems = {

};

const defaultEquippedItems = {

};

// CONCATENATED MODULE: ./src/framework/Animation.js
class Animation {
  constructor(spriteSheet, frameDuration, rowNumber, parent) {
      this.spriteSheet = spriteSheet;
      this.rowNumber = rowNumber;
      this.frameDuration = frameDuration;
      this.parent = parent;
      this.durationCounter = 0;
      this.currentFrame = 0;
  }
  update(ctx) {
    if (this.parent.isMoving) {
      if (this.durationCounter === this.frameDuration - 1) {
        this.currentFrame = (this.currentFrame + 1) % this.spriteSheet.rowLength;
      }
      this.durationCounter = (this.durationCounter + 1) % this.frameDuration;
    }
    this.draw(ctx)
  }
  draw(ctx) {
    ctx.drawImage(
      this.spriteSheet.image,
      this.currentFrame * this.spriteSheet.frameWidth,
      this.rowNumber * this.spriteSheet.frameHeight,
      this.spriteSheet.frameWidth,
      this.spriteSheet.frameHeight,
      this.parent.rectShape.x,
      this.parent.rectShape.y,
      this.parent.rectShape.width,
      this.parent.rectShape.height
    );
  }
}

/* harmony default export */ var framework_Animation = (Animation);

// CONCATENATED MODULE: ./src/framework/InventoryGrid.js
class InventoryGrid {
  constructor(game, x, y, sourceX, sourceY, width, height, sprite, slotParameters) {
    this.game = game;
    this.sprite = new Image(width, height);
    this.sprite.src = sprite
    this.hoveredItemBackground = new Image();
    this.hoveredItemBackground.src = 'img/item_bg.png';
    this.x = x;
    this.y = y;
    this.sourceX = sourceX;
    this.sourceY = sourceY;
    this.slotParameters = slotParameters;
    this.hoveredItem = null;
    this.itemSlots = [];
    this.xStart = this.x + sourceX;
    this.yStart = this.y + sourceY;
    this.createSlots();
  }
  draw(ctxHUD) {
    ctxHUD.drawImage(this.sprite, this.x, this.y, this.sprite.width, this.sprite.height);
    if (this.hoveredItem) {
      const y = this.game.input.mouse.y;
      let x = this.game.input.mouse.x;

      // blokowanie osi x by box z opisem przedmiotu nie wychodził poza ekran
      if (x - 130 < 0) {
        x = 130;
      }
      if (x > 830) {
        x = 830;
      }
      ctxHUD.globalAlpha = 0.7;
      ctxHUD.drawImage(this.hoveredItemBackground, x - 110, y + 40);
      ctxHUD.fillText('Name: ' + this.hoveredItem.name, x - 105, y + 60);
      ctxHUD.fillText('Typ: ' + this.hoveredItem.type, x - 105, y + 80);
      ctxHUD.fillText('Cena: ' + this.hoveredItem.value, x - 105, y + 100);
      ctxHUD.fillText('Bonus: ' + this.hoveredItem.bonus, x - 105, y + 120);
      ctxHUD.globalAlpha = 1;
    }
    this.drawItems(ctxHUD);
  }
  drawItems(ctx) {
    for (let i = 0; i < this.itemSlots.length; i++) {
      const item = this.itemSlots[i].item;
      if (item === null) continue;
      if (item.isFloating) {
        ctx.drawImage(item.sprite, this.game.input.mouse.x - 30, this.game.input.mouse.y - 30, 80, 80);
      }
      else {
        ctx.drawImage(item.sprite, this.itemSlots[i].x, this.itemSlots[i].y, 60, 60);
        if (item.stackable) {
          ctx.save();
          ctx.fillStyle = 'rgb(0,0,0)';
          ctx.fillText('x' + this.itemSlots[i].stackAmount, this.itemSlots[i].x, this.itemSlots[i].y + 55);
          ctx.restore();
        }
      }
    }
  }
  createSlots() {
    let y = this.slotParameters.margin;
    for (let i = 0; i < this.slotParameters.columnsNumber; i++) {
      let x = this.slotParameters.margin;
      for (let j = 0; j < this.slotParameters.rowsNumber; j++) {
        let slot = {
          x: this.xStart + x,
          y: this.yStart + y,
          width: this.slotParameters.width,
          height: this.slotParameters.height,
          empty: true,
          stackAmount: 0,
          item: null
        };
        x += this.slotParameters.width + this.slotParameters.margin;
        this.itemSlots.push(slot);
      }
      y += this.slotParameters.height + this.slotParameters.margin;
    }
  }
}

/* harmony default export */ var framework_InventoryGrid = (InventoryGrid);

// CONCATENATED MODULE: ./src/framework/Item.js
class Item_Item {
  constructor(itemData) {
    this.id = itemData.id;
    this.sprite = new Image();
    this.sprite.src = itemData.spriteSrc;
    this.name = itemData.name;
    this.type = itemData.type;
    this.requirements = itemData.requirements;
    this.bonus = itemData.bonus;
    this.value = itemData.value;
    this.stackable = itemData.stackable;
    this.possibleToSell = itemData.possibleToSell;
  }
}

/* harmony default export */ var framework_Item = (Item_Item);

// CONCATENATED MODULE: ./src/framework/utils/pointInsideRectangle.js
function pointInsideRectangle(xCord, yCord, rect) {
  return (xCord > rect.x && xCord < rect.x + rect.width && yCord > rect.y && yCord < rect.y + rect.height);
}

// CONCATENATED MODULE: ./src/framework/Equipment.js




class Equipment_Equipment {
  constructor(game, player, loadedEquippedItems, loadedInventoryItems) {
    this.game = game;
    this.player = player;
    this.isOpen = false;
    this.inventory = new framework_InventoryGrid(
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
      this.equipItem(new framework_Item(itemData));
    });
    loadedInventoryItems.forEach(item => {
      const itemData = this.game.dataManager.getItemData(item.type, item.id);
      this.addItemToInventory(new framework_Item(itemData), item.stackAmount);
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

/* harmony default export */ var framework_Equipment = (Equipment_Equipment);

// CONCATENATED MODULE: ./src/framework/FightStatistics.js
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

/* harmony default export */ var framework_FightStatistics = (FightStatistics);

// CONCATENATED MODULE: ./src/framework/Journal.js
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

/* harmony default export */ var framework_Journal = (Journal);

// CONCATENATED MODULE: ./src/framework/RectangleShape.js
class RectangleShape {
  constructor(x = 0, y = 0, width = 50, height = 50) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

/* harmony default export */ var framework_RectangleShape = (RectangleShape);

// CONCATENATED MODULE: ./src/framework/utils/randomNumber.js
function randomNumber_randomNumber(max) {
  return Math.floor(Math.random() * (max));
}

// CONCATENATED MODULE: ./src/framework/Skills.js


class Skills_Skills {
  constructor(game, player) {
    this.game = game;
    this.player = player
    this.sprite = new Image();
    this.sprite.src = 'img/umyjkibg.png';
    this.isOpen = false;
    this.values = {
      openLocks: 35,
      persuasion: 35,
      intimidation: 35
    };
    this.game.input.subscribeSignal('sDown', this.toggle, this);
  }
  setSkillValue(skill, value) {
    this.values[skill] = value;
  }
  modifySkillValue(skill, value) {
    this.values[skill] += value;
  }
  skillCheck(skill) {
    const rand = randomNumber_randomNumber(100) + 1;
    console.log('Skill test result: ' + rand);
    if (rand <= this[skill]) {
      return true;
    }
    else {
      return false;
    }
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
    HUDLayer.font = '35px Georgia';
    HUDLayer.drawImage(this.sprite, 50, 120);
    HUDLayer.fillStyle = 'rgb(255,255,255)';
    HUDLayer.fillText('Otwieranie zamków:  ' + this.values.openLocks, 70, 240);
    HUDLayer.fillText('Perswazja:  ' + this.values.persuasion, 70, 280);
    HUDLayer.fillText('Zastraszanie:  ' + this.values.intimidation, 70, 320);
  }
}

/* harmony default export */ var framework_Skills = (Skills_Skills);

// CONCATENATED MODULE: ./src/framework/Spritesheet.js
class SpriteSheet {
  constructor(fileName, frameWidth, frameHeight) {
    this.image = new Image();
    this.image.src = fileName;
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.rowLength;
    this.image.addEventListener('load', () => this.rowLength = Math.floor(this.image.width / frameWidth));
  }
}

/* harmony default export */ var Spritesheet = (SpriteSheet);

// CONCATENATED MODULE: ./src/framework/utils/throttleProperty.js
function throttleProperty(target, property, temporaryBoolean = false, delay = 100) {
  target[property] = temporaryBoolean;
  setTimeout(() => target[property] = !temporaryBoolean, delay);
}

// CONCATENATED MODULE: ./src/framework/Vector2.js
class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return '(' + this.x + ',' + this.y + ')';
  }
}

/* harmony default export */ var framework_Vector2 = (Vector2);

// CONCATENATED MODULE: ./src/framework/Player.js










class Player_Player {
  constructor(game, data) {
    this.game = game;
    this.name = data.name;
    this.gender = data.gender;
    this.gold = data.gold;
    this.level = data.level;
    this.exp = data.exp;
    this.rectShape = new framework_RectangleShape(0, 0, 50, 70);
    this.lastMove = new framework_Vector2();
    this.spriteSheet = this.gender === 'male' ?
      new Spritesheet('img/spritesheets/male01.png', 32, 48) :
      new Spritesheet('img/spritesheets/female01.png', 32, 48);
    this.animations = new Map();
    this.currentAnimation;
    this.createAnimations();
    this.fightStatistics = new framework_FightStatistics(this.game, this, data.fightStatistics);
    this.journal = new framework_Journal(this.game, this);
    this.skills = new framework_Skills(this.game, this);
    this.equipment = new framework_Equipment(this.game, this, data.equippedItems, data.inventoryItems);
    this.movingSpeed = 7;
    this.isMoving = false;
    this.direction = 'down';
    this.isAlive = true;
    this.canMove = true;
    this.canMoveUp = true;
    this.canMoveDown = true;
    this.canMoveLeft = true;
    this.canMoveRight = true;
    this.canToggleWindow = true;
    this.canStartEncounter = true;
    this.levelUpExpRequirements = [0, 1000, 2000, 3000, 4000, 5000];
    this.battleSkills = [];
    this.game.input.subscribeSignal('tDown', this.printTime, this);
    this.deathFog = new Image();
    this.deathFog.src = 'img/gray_bg.png';
    this.game.player = this;
  }
  update(Layer1, HUDLayer) {
    if (this.canMove) {
      this.blockOnSceneEdge()
      if (this.game.input.keyboard.arrowLeft.isDown && this.canMoveLeft) {
        this.movePlayer('left', 'walkingLeft');
      }
      else if (this.game.input.keyboard.arrowUp.isDown && this.canMoveUp) {
        this.movePlayer('up', 'walkingUp');
      }
      else if (this.game.input.keyboard.arrowRight.isDown && this.canMoveRight) {
        this.movePlayer('right', 'walkingRight');
      }
      else if (this.game.input.keyboard.arrowDown.isDown && this.canMoveDown) {
        this.movePlayer('down', 'walkingDown');
      }
      else {
        this.isMoving = false;
      }
    }
    this.currentAnimation.update(Layer1);
    this.fightStatistics.update(HUDLayer);
    this.journal.update(HUDLayer);
    this.skills.update(HUDLayer);
    this.equipment.update(HUDLayer);
  }
  createAnimations() {
    this.animations.set('walkingLeft', new framework_Animation(this.spriteSheet, 16, 1, this));
    this.animations.set('walkingRight', new framework_Animation(this.spriteSheet, 16, 2, this));
    this.animations.set('walkingUp', new framework_Animation(this.spriteSheet, 16, 3, this));
    this.animations.set('walkingDown', new framework_Animation(this.spriteSheet, 16, 0, this));
    this.currentAnimation = this.animations.get('walkingDown');
  }
  printTime() {
    this.game.console.addMessage(this.game.time.printCurrentTime());
    throttleProperty(this, "canToggleWindow", false, 500);
  }
  movePlayer(direction, animation) {
    this.direction = direction;
    this.currentAnimation = this.animations.get(animation);
    this.isMoving = true;
    if (direction === 'up') {
      this.rectShape.y -= this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', 0, this.movingSpeed);
      this.lastMove.y = -this.movingSpeed;
    }
    else if (direction === 'right') {
      this.rectShape.x += this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', -this.movingSpeed, 0);
      this.lastMove.x = this.movingSpeed;
    }
    else if (direction === 'down') {
      this.rectShape.y += this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', 0, -this.movingSpeed);
      this.lastMove.y = this.movingSpeed;
    }
    else if (direction === 'left') {
      this.rectShape.x -= this.movingSpeed;
      this.game.sceneManager.currentScene.translateLayer('Layer1', this.movingSpeed, 0);
      this.lastMove.x = -this.movingSpeed;
    }
  }
  blockOnSceneEdge() {
    if (this.rectShape.x + this.rectShape.width > this.game.sceneManager.currentScene.width) {
      this.canMoveRight = false;
    }
    else {
      this.canMoveRight = true;
    }
    if (this.rectShape.x < 0) {
      this.canMoveLeft = false;
    }
    else {
      this.canMoveLeft = true;
    }
    if (this.rectShape.y + this.rectShape.width + 20 > this.game.sceneManager.currentScene.height) {
      this.canMoveDown = false;
    }
    else {
      this.canMoveDown = true;
    }
    if (this.rectShape.y < 0) {
      this.canMoveUp = false;
    }
    else {
      this.canMoveUp = true;
    }
  }
  setPosition(x, y) {
    this.rectShape.x = x;
    this.rectShape.y = y;
    this.game.sceneManager.currentScene.translateLayer('Layer1', 960 / 2 - x, 704 / 2 - y);
  }
  addExperiencePoints(points) {
    this.exp += points;
    if (this.exp >= this.levelUpExpRequirements[this.level]) {
      this.levelUp();
    }
  }
  levelUp() {
    this.level++;
    this.game.console.addMessage('Awansowałeś na ' + this.level + ' poziom doświadczenia!');
    console.log('TODO: add level up statistics bonuses')
    /*this.maxHealthPoints += 50;
    this.healthPoints = this.maxHealthPoints;
    this.maxManaPoints += 10;
    this.manaPoints = this.maxManaPoints;
    this.strenght += 5;
    if (this.level == 2) {
      this.addSkill("Wir Ciosów", 10, "img/battleskill02.png", ["Siekasz wrogów jak cebulkę.","",""]);
    }
    */
  }
  loseConsciousness() {
    this.isAlive = false;
    this.game.console.addMessage('Staciłeś przytomność!');
  }
  addBattleSkill(name ,manaCost, sprite, description, index) {
    const skill = new BattleSkill(name, manaCost, sprite, description, index);
    this.battleSkills.push(skill);
  }
}

/* harmony default export */ var framework_Player = (Player_Player);

// CONCATENATED MODULE: ./src/framework/createPlayer.js



function createPlayer(game, data) {
  data.gold = data.gold || 100;
  data.exp = data.exp || 0;
  data.level = data.level || 1;
  data.fightStatistics = data.fightStatistics || defaultFightStatistics;
  data.inventoryItems = data.inventoryItems || [];
  data.equippedItems = data.equippedItems || [];
  return new framework_Player(game, data);
}

// CONCATENATED MODULE: ./src/gameScenes/chooseGenderScene.js





const chooseGenderScene = {
  init() {
    this.alpha = 0;
    this.maleGenderCheckbox = new guiElements_Checkbox(200, 400, 30, 'Male');
    this.femaleGenderCheckbox = new guiElements_Checkbox(700, 400, 30, 'Female');
    this.startButton = new guiElements_Button(370, 570, 240, 80, 'img/buttons/start_button.png');
    const Layer1 = this.addCanvasLayer('Layer1');
    Layer1.font = '40px Georgia';
  },
  enter({playerName}) {
    this.playerName = playerName;
    this.addSignalListeners({click: this.onClick});
  },
  exit() {
    this.removeSignalListeners();
  },
  update({Layer1}) {
    this.draw(Layer1);
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
  },
  methods: {
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'gb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.save();
      Layer1.fillStyle = 'white';
      Layer1.fillText('Choose gender', 340, 390);
      Layer1.restore();
      this.maleGenderCheckbox.draw(Layer1);
      this.femaleGenderCheckbox.draw(Layer1);
      Layer1.drawImage(
        this.startButton.sprite,
        this.startButton.x,
        this.startButton.y,
        this.startButton.width,
        this.startButton.height
      );
    },
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.maleGenderCheckbox)) {
        this.maleGenderCheckbox.changeState();
        if (this.femaleGenderCheckbox.checked) {
          this.femaleGenderCheckbox.changeState();
        }
      }
      else if (pointInsideRectangle(x, y, this.femaleGenderCheckbox)) {
        this.femaleGenderCheckbox.changeState();
        if (this.maleGenderCheckbox.checked) {
          this.maleGenderCheckbox.changeState();
        }
      }
      else if (
        (this.maleGenderCheckbox.checked || this.femaleGenderCheckbox.checked) &&
        pointInsideRectangle(x, y, this.startButton)
      ) {
        const gender = this.maleGenderCheckbox.checked ? 'male' : 'female';
        createPlayer(this.game, {name: this.playerName, gender});
        this.game.sceneManager.changeCurrentScene('startLevel', {setPlayerPosition: true});
      }
    }
  }
};

/* harmony default export */ var gameScenes_chooseGenderScene = (chooseGenderScene);

// CONCATENATED MODULE: ./src/gameScenes/chooseNameScene.js



const chooseNameScene = {
  init() {
    this.alpha = 0;
    this.playerName = '';
    this.playButton = new guiElements_Button(370, 570, 240, 80, 'img/buttons/start_button.png');
    const Layer1 = this.addCanvasLayer('Layer1');
    Layer1.font = '40px Georgia';
  },
  enter() {
    this.addSignalListeners(
      {
        letterKeyDown: this.addCharacter,
        backspaceDown: this.removeCharacter,
        click: this.nextState
      }
    );
  },
  exit() {
    this.removeSignalListeners();
  },
  update({Layer1}) {
    this.draw(Layer1);
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
  },
  methods: {
    addCharacter({value}) {
      this.playerName += value;
    },
    removeCharacter() {
      this.playerName = this.playerName.slice(0, this.playerName.length - 1);
    },
    nextState({x, y}) {
      if (pointInsideRectangle(x, y, this.playButton)) {
        this.game.sceneManager.changeCurrentScene('chooseGender', {playerName: this.playerName});
      }
    },
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'rgb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      Layer1.drawImage(
        this.playButton.sprite,
        this.playButton.x,
        this.playButton.y,
        this.playButton.width,
        this.playButton.height
      );
      Layer1.fillStyle = 'white';
      Layer1.fillText('Enter your character name', 230, 100);
      Layer1.fillRect(280, 400, 400, 70);
      Layer1.fillStyle = 'black';
      Layer1.fillText(this.playerName, 300, 445);
    }
  }
};

/* harmony default export */ var gameScenes_chooseNameScene = (chooseNameScene);

// CONCATENATED MODULE: ./src/framework/FloatingText.js
class FloatingText {
  constructor(containingArray ,text, x, y, color, duration) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.color = color;
    containingArray.push(this);
    setTimeout(() => {
      const index = containingArray.findIndex((element) => element === this);
      containingArray.splice(index, 1);
    }, duration);
  }
  update(ctx) {
    this.y -= 2;
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.font = '35px Georgia';
    ctx.strokeText(this.text, this.x, this.y);
    ctx.fillText(this.text, this.x, this.y);
    ctx.restore();
  }
}

/* harmony default export */ var framework_FloatingText = (FloatingText);

// CONCATENATED MODULE: ./src/framework/createFloatingText.js


function createFloatingText(containingArray, text, x, y, color, duration) {
  return new framework_FloatingText(containingArray, text, x, y, color, duration);
}

// CONCATENATED MODULE: ./src/framework/FightStatuses.js
class FightStatuses {
  constructor() {
    this.poison = false;
    this.stun = false;
  }
}

/* harmony default export */ var framework_FightStatuses = (FightStatuses);

// CONCATENATED MODULE: ./src/framework/PlayerDuringFight.js




class PlayerDuringFight_PlayerDuringFight {
  constructor(game, fightScene, player) {
    this.game = game;
    this.fightScene = fightScene;
    this.player = player;
    this.fightStatistics = player.fightStatistics.statistics;
    this.skills = player.battleSkills;
    this.canAttack = false;
    this.canChangeTarget = true;
    this.isAlive = true;
    this.battleSkills = [];
    this.canUseSkill = true;
    this.moveLeftInFight = false;
    this.moveRightInFight = false;
    this.moveVariableInFight = 0;
    this.fightStatuses = new framework_FightStatuses();
    this.loadSprites();
  }
  update(CharactersLayer, HUDLayer) {
    if (this.fightStatistics.currentHealthPoints < 1 && this.isAlive) {
      this.isAlive = false;
      this.player.loseConsciousness();
    }
    const encounter = this.fightScene.encounter;
    if (this.canAttack && !this.fightStatuses.stun && this.game.input.keyboard.space.isDown) {
      this.attack(encounter.actualTarget);
      this.moveRightInFight = true;
    }
    if (this.game.input.keyboard.arrowDown.isDown && this.canChangeTarget) {
      encounter.pointerCounter++;
      if (encounter.pointerCounter === encounter.encounterEnemies.length) {
        encounter.pointerCounter = 0;
      }
      encounter.actualTarget = encounter.encounterEnemies[encounter.pointerCounter];
      throttleProperty(this, 'canChangeTarget', false, 300);
    }
    if (this.game.input.keyboard.arrowUp.isDown && this.canChangeTarget) {
      encounter.pointerCounter--;
      if (encounter.pointerCounter === -1) {
        encounter.pointerCounter = encounter.encounterEnemies.length - 1;
      }
      encounter.actualTarget = encounter.encounterEnemies[encounter.pointerCounter];
      throttleProperty(this, 'canChangeTarget', false, 300);
    }
    if (this.moveRightInFight) {
      this.moveVariableInFight += 3;
      if (this.moveVariableInFight >= 80) {
        this.moveRightInFight = false;
        this.moveLeftInFight = true;
      }
    }
    if (this.moveLeftInFight) {
      this.moveVariableInFight -= 3;
      if (this.moveVariableInFight <= 0) {
        this.moveLeftInFight = false;
      }
    }
    this.updatePowerPoints();
    this.draw(CharactersLayer, HUDLayer);
  }
  draw(CharactersLayer, HUDLayer) {
    CharactersLayer.drawImage(this.sprite, 100 + this.moveVariableInFight, 240, 200, 300);
    for (let i = 0; i < this.battleSkills.length; i++) {
      HUDLayer.drawImage(
        this.battleSkills[i].button.sprite,
        this.battleSkills[i].button.x,
        this.battleSkills[i].button.y,
        this.battleSkills[i].button.width,
        this.battleSkills[i].button.height
      );
    }
    HUDLayer.font = '20px Georgia';
    HUDLayer.fillStyle = 'white';
    HUDLayer.drawImage(this.powerBarWrapper, 50, 180, 106, 36);
    HUDLayer.drawImage(
      this.powerBar,
      53,
      183,
      this.fightStatistics.currentPowerPoints / this.fightStatistics.maxPowerPoints * 100,
      30
    );
    HUDLayer.drawImage(this.healthBarWrapper, 50, 100, 106, 36);
    HUDLayer.drawImage(
      this.healthBar,
      53,
      103,
      this.fightStatistics.currentHealthPoints / this.fightStatistics.maxHealthPoints * 100,
      30
    );
    HUDLayer.fillText(
      this.fightStatistics.currentHealthPoints + '/' + this.fightStatistics.maxHealthPoints,
      64,
      124
    );
    HUDLayer.drawImage(this.manaBarWrapper, 50, 140, 106, 36);
    HUDLayer.drawImage(
      this.manaBar,
      53,
      143,
      this.fightStatistics.currentManaPoints / this.fightStatistics.maxManaPoints * 100,
      30
    );
    HUDLayer.fillText(
      this.fightStatistics.currentManaPoints + '/' + this.fightStatistics.maxManaPoints,
      75,
      164
    );
    if (this.fightStatuses.stun) {
      HUDLayer.save();
      HUDLayer.strokeStyle = 'black';
      HUDLayer.fillStyle = 'yellow';
      HUDLayer.font = '35px Georgia';
      HUDLayer.strokeText('Ogłuszony', 200, 250);
      HUDLayer.fillText('Ogłuszony', 200, 250);
      HUDLayer.restore();
    }
  }
  useSkill(skillIndex) {
    if (!this.canUseSkill) {
      return;
    }
    if (this.skills[skillIndex].manaCost > this.fightStatistics.currentManaPoints) {
      this.game.console.addMessage('Brak wystarczającej ilości punktów many!');
      return;
    }
    this.game.console.addMessage('Użyto umiejętności ' + this.skills[skillIndex].name);
    this.fightStatistics.currentManaPoints -= this.skills[skillIndex].manaCost;
    this.fightStatistics.currentPowerPoints = 0;
    let dmg;
    switch (skillIndex) {
      case 0:
        /*if (this.equippedItems[3]) {
          dmg = this.strenght * 2 + randomNumber(this.equippedItems[3].bonus - 1) + 1;
        }
        else {
          dmg = this.strenght * 2;
        }
        */
        //dmg = Math.floor(dmg);
        dmg = 20;
        this.fightScene.encounter.actualTarget.getDamage(dmg)
        break;
      case 1:
        /*
        if (this.equippedItems[3]) {
          dmg = this.strenght / 2 + randomNumber(this.equippedItems[3].bonus -1) + 1;
        }
        else {
          dmg = this.strenght / 2;
        }
        dmg = Math.floor(dmg);
        */
        dmg = 10;
        for (let i = 0; i < this.fightScene.encounter.encounterEnemies.length; i++) {
          this.fightScene.encounter.encounterEnemies[i].getDamage(dmg);
        }
        break;
      case 2:
      default:
        break;
    }
  }
  attack(target) {
    let dmg;
    this.fightStatistics.currentPowerPoints -= 200;
    /*if (this.equippedItems[3]) {
      dmg = this.strenght + randomNumber(this.equippedItems[3].bonus - 1) + 1;
    }
    else {
      dmg = this.strenght;
    }*/
    dmg = 10;
    target.getDamage(dmg);
  }
  getDamage(dmg, enemyName) {
    let reducedDmg = dmg - Math.floor(this.fightStatistics.armorPoints / 3);
    if (reducedDmg <= 0) reducedDmg = 1;
    this.fightStatistics.currentHealthPoints -= reducedDmg;
    this.game.console.addMessage('Otrzymałeś ' + reducedDmg + ' punktów obrażeń od ' + enemyName + '!');
    createFloatingText(this.fightScene.floatingTexts, reducedDmg, 185, 280, 'red', 2000);
  }
  loadSprites() {
    this.sprite = new Image;
    this.sprite.src = 'img/hero.png';
    this.healthBarWrapper = new Image();
    this.healthBarWrapper.src = 'img/health_bar.png';
    this.healthBar = new Image();
    this.healthBar.src = 'img/health.png';
    this.manaBarWrapper = new Image();
    this.manaBarWrapper.src = 'img/mana_bar.png';
    this.manaBar = new Image();
    this.manaBar.src = 'img/mana.png';
    this.powerBar = new Image();
    this.powerBar.src = 'img/bar.png';
    this.powerBarWrapper = new Image();
    this.powerBarWrapper.src = 'img/bar_bg.png';
  }
  updatePowerPoints() {
    if (!this.fightStatuses.stun) {
      this.fightStatistics.currentPowerPoints += 3
      if (this.fightStatistics.currentPowerPoints < 200) {
        this.canAttack = false;
        this.canUseSkill = false;
      }
      else {
        this.canAttack = true;
        this.canUseSkill = true;
        if (this.fightStatistics.currentPowerPoints > this.fightStatistics.maxPowerPoints) {
          this.fightStatistics.currentPowerPoints = 200;
        }
      }
    }
  }
}

/* harmony default export */ var framework_PlayerDuringFight = (PlayerDuringFight_PlayerDuringFight);

// CONCATENATED MODULE: ./src/gameScenes/fightScene.js






const fightScene_fightScene = {
  init() {
    this.alpha = 0;
    this.floatingTexts = [];
    this.skillDescription = null;
    this.escapeButton = new guiElements_Button(40, 610, 160, 80, "img/buttons/btn_escape.png");
    this.skillDescriptionBg = new Image();
    this.skillDescriptionBg.src = 'img/item_bg.png';
    this.addCanvasLayer('Background');
    this.addCanvasLayer('Characters');
    this.addCanvasLayer('HUDLayer');
  },
  enter(encounter) {
    this.encounter = encounter;
    this.playerDuringFight = new framework_PlayerDuringFight(this.game, this, this.game.player);
    this.floatingTexts = [];
    this.game.player.fightStatistics.calculateArmorPoints();
    for (let i = 0; i < this.encounter.numberOfEnemies; i++) {
      setTimeout(() => {
        this.encounter.encounterEnemies[i].canAttack = true;
      }, 3000 + randomNumber_randomNumber(2000));
    }
    this.addSignalListeners({click: this.onClick, mouseMove: this.onMouseMove});
  },
  update({Background, Characters, HUDLayer}) {
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
    this.playerDuringFight.update(Characters, HUDLayer);
    if (this.encounter.encounterEnemies.length === 0) {
      this.encounter.terminate();
      this.game.sceneManager.changeCurrentScene(
        'loadStoragedScene',
        {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
      );
    }
    if (!this.playerDuringFight.isAlive) {
      this.game.sceneManager.changeCurrentScene(
        'loadStoragedScene',
        {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
      );
    }
    for (let i = 0; i < this.floatingTexts.length; i++) {
      this.floatingTexts[i].update(HUDLayer);
    }
    this.draw(Background, HUDLayer);
    this.encounter.update(Characters);
    this.game.console.update(HUDLayer);
  },
  exit() {
    this.removeSignalListeners();
    throttleProperty(this.game.player, 'canStartEncounter', false, 3000);
  },
  methods: {
    draw(Background, HUDLayer) {
      HUDLayer.save();
      HUDLayer.font = '20px Georgia';
      HUDLayer.fillStyle = 'white';
      Background.globalAlpha = this.alpha;
      Background.drawImage(this.encounter.backgroundSprite, 0, 0, 960, 704);
      if (this.skillDescription) {
        HUDLayer.globalAlpha = 0.7;
        const x = this.game.input.mouse.x;
        const y = this.game.input.mouse.y;
        HUDLayer.drawImage(this.skillDescriptionBg, x - 110, y + 40, 440, 120);
        HUDLayer.fillText('Nazwa: ' + this.skillDescription.name, x - 105, y + 60);
        HUDLayer.fillText('Koszt many: ' + this.skillDescription.manaCost, x - 105, y + 80);
        HUDLayer.fillText('Opis: ' + this.skillDescription.description[0], x - 105, y + 100);
        HUDLayer.fillText(this.skillDescription.description[1], x - 105, y + 120);
        HUDLayer.fillText(this.skillDescription.description[2], x - 105, y + 140);
        HUDLayer.globalAlpha = 1;
      }
      HUDLayer.drawImage(this.escapeButton.sprite, this.escapeButton.x, this.escapeButton.y);
      HUDLayer.restore();
    },
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.escapeButton)) {
        this.game.console.addMessage('Uciekłeś z pola bitwy.');
        this.game.sceneManager.changeCurrentScene(
          'loadStoragedScene',
          {playerPositionX: this.game.player.rectShape.x, playerPositionY: this.game.player.rectShape.y}
        );
      }
      if (this.playerDuringFight.canUseSkill) {
        for (let i = 0; i < this.playerDuringFight.battleSkills.length; i++) {
          if (pointInsideRectangle(x, y, this.playerDuringFight.battleSkills[i].button)) {
            this.playerDuringFight.useSkill(i);
          }
        }
      }
    },
    onMouseMove({x, y}) {
      this.skillDescription = null;
      for (let i = 0; i < this.playerDuringFight.battleSkills.length; i++) {
        if (pointInsideRectangle(x, y, this.playerDuringFight.battleSkills[i].button)) {
          this.skillDescription = this.playerDuringFight.battleSkills[i];
          break;
        }
      }
    }
  }
};

/* harmony default export */ var gameScenes_fightScene = (fightScene_fightScene);

// CONCATENATED MODULE: ./src/gameScenes/fightIntroScene.js
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

/* harmony default export */ var gameScenes_fightIntroScene = (fightIntroScene);

// CONCATENATED MODULE: ./src/framework/utils/displayStyledText.js
function displayStyledText(text, context, x, y) {
  const fragmentsToStyle = [];

  // search for style patterns
  for (let i = 0; i < text.length; i++) {
    if (text[i] === '$') {
      const endIndex = text.indexOf('#', i + 1);
      const colorNumbers = {
        '1': 'red',
        '2': 'green',
        '3': 'blue'
      }
      const color = colorNumbers[text[i + 1]];
      fragmentsToStyle.push({startIndex: i, endIndex, color});
    }
  }
  if (fragmentsToStyle.length > 0) {
    let stringIndex = 0;
    for (const fragment of fragmentsToStyle) {
      context.save();
      // display text between styled fragments
      context.fillText(text.substring(stringIndex, fragment.startIndex), x, y);

      // modify x by width of displayed text
      x += context.measureText(text.substring(stringIndex, fragment.startIndex)).width;

      // set color for styled fragment
      context.fillStyle = fragment.color;

      // draw styled fragment
      context.fillText(text.substring(fragment.startIndex + 2, fragment.endIndex), x, y);
      x += context.measureText(text.substring(fragment.startIndex + 2, fragment.endIndex)).width;
      context.restore();
      stringIndex = fragment.endIndex + 1;
    }

    // draw text after last styled fragment
    x = context.measureText(text.substring(0, stringIndex)).width + 250;
    context.fillText(text.substring(stringIndex), x, y);

  }

  // if no styled fragments, just draw plain text
  else {
    context.fillText(text, x, y);
  }
}

// CONCATENATED MODULE: ./src/framework/utils/wrapTextLines.js
function wrapTextLines(text, lineLengthLimit) {
  const rowsNumber = Math.ceil(text.length / lineLengthLimit);
  const rowsArray = [];
  if (rowsNumber === 1) {
    rowsArray.push(text);
  }
  else {
    let indexStart = 0;
    let indexEnd = lineLengthLimit;
    while (indexEnd < text.length) {
      indexEnd = text.lastIndexOf(" ", indexEnd);
      const row = text.substring(indexStart, indexEnd);
      rowsArray.push(row);
      indexStart = indexEnd + 1;
      indexEnd += lineLengthLimit;
    }
    const lastRow = text.substring(indexStart);
    rowsArray.push(lastRow);
  }
  return rowsArray;
}

// CONCATENATED MODULE: ./src/framework/Console.js



class Console_Console {
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

/* harmony default export */ var framework_Console = (Console_Console);

// CONCATENATED MODULE: ./src/framework/data/itemsData.js
const weapons = [
  {
    id: 1, name: 'Tasak', type: 'weapon', spriteSrc: 'img/items/tasak.png', requirements: {strenght: 15},
    value: 100, stackable: false, possibleToSell: true, bonus: 35
  }
];

const shields = [
  {
    id: 1, name: 'Mała Tarcza',type: 'shield', spriteSrc: 'img/items/tarcza.png', requirements: {strenght: 10},
    value: 50, stackable: false, possibleToSell: true, bonus: 15
  }
];

const helms = [

];

const boots = [
  {
    id: 1, name:'Skórzane Buty', type: 'boots', spriteSrc: 'img/items/buty.png', requirements: {strenght: 5},
    value: 20, stackable: false, possibleToSell: true, bonus: 5
  }
];

const armors = [

];

const potions = [
  {
    id: 1, name: 'Dziki Sad', type: 'potion_health', spriteSrc: 'img/items/health_potion.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 50
  },
  {
    id: 2, name: 'Kompot z Jaszczura', type: 'potion_mana', spriteSrc: 'img/items/mana_potion.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 20
  }
];

const lockpicks = [
  {
    id: 1, name: 'Wytrych', type: 'lockpick', spriteSrc: 'img/lockpick.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 0
  }
];

const questItems = [
  {
    id: 1, name: 'Notatka', type: 'note', spriteSrc: 'img/note.png', requirements: {},
    value: 0, stackable: false, possibleToSell: false, bonus: 0
  },
];

const itemsData_pickableItems = [
  {
    id: 1, name: 'Kwiatek', type: 'pickable', spriteSrc: 'img/items/kwiatek.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 0
  }
];

// CONCATENATED MODULE: ./src/framework/data/lootTables.js
const level1 = [
  {
    min: 0,
    max: 400,
    type: 'weapon',
    id: 1
  }
];

// CONCATENATED MODULE: ./src/framework/data/monstersData.js
const monstersData = {
  spider: {
    name: 'Pająk',
    sprite: 'img/enemies/pajak.png',
    hp: 60,
    dmg: 5,
    expReward: 100,
    width: 200,
    height: 120
  }
};

/* harmony default export */ var data_monstersData = (monstersData);

// CONCATENATED MODULE: ./src/framework/data/questsData.js
const questsData = [
  {
    id: 0,
    name: 'Polowanie na ścierwojady',
    ownerName: 'Bartek',
    requirements: '',
    objectives: [
      {action: 'kill', target: 'scavenger', number: 5, desciption: 'Zabij 5 ścierwojadów'},
      {action: 'talk', target: 'Bartek', number: 1, desciption: 'Wróc do Bartka'}
    ],
    reward: {gold: 300, exp: 500},
    dialogToTakeQuest: {
      npcDialog: 'Zlecenie na $1wilki#',
      answers: [
        {
          response: '1) Ok podejmę się tego wyzwania',
          condition: '',
          ifFailConditionTest: {

          },
          consequences: [
            {
              action: 'accept quest',
              value: 'id_01'
            }
          ]
        },
        {
          response: '2) Spadaj pan',
          condition: '',
          ifFailConditionTest: {

          },
          consequences: [
            {
              action: 'end dialog',
              value: ''
            }
          ]
        }
      ]
    },
    dialogsDependentOnQuestState: [
      {
        npcDialog: 'Jak ci idzie sprawa z wilkami?'
      },
      {
        npcDialog: 'Uporałeś się z tą zgrają wilków? O to twoja nagroda.'
      }
    ]
  }
];

/* harmony default export */ var data_questsData = (questsData);

// CONCATENATED MODULE: ./src/framework/DataManager.js





class DataManager_DataManager {
  constructor() {
    this.items = {}
    this.items.weapons = weapons;
    this.items.shields = shields;
    this.items.helms = helms;
    this.items.boots = boots;
    this.items.armors = armors;
    this.items.potions = potions;
    this.items.lockpicks = lockpicks;
    this.items.pickableItems = itemsData_pickableItems;
    this.items.questItems = questItems;
    this.quests = data_questsData;
    this.monsters = data_monstersData;
    this.lootTables = lootTables_namespaceObject;
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

/* harmony default export */ var framework_DataManager = (DataManager_DataManager);

// CONCATENATED MODULE: ./src/framework/domContentLoaded.js
function domContentLoaded(callback) {

  // boot game if browser is ready
  if (document.readyState !== 'loading') {
    callback();
    return;
  }

  // else wait for DOMContentLoaded event
  const onDomContentLoaded = () => {
    document.removeEventListener('DOMContentLoaded', onDomContentLoaded);
    callback();
  }
  document.addEventListener('DOMContentLoaded', onDomContentLoaded);
}

// CONCATENATED MODULE: ./src/framework/addDomEventListeners.js
// set up necessary DOM event listeners
function addDomEventListeners(canvas, callback) {
  canvas.addEventListener('mousedown', callback);
  canvas.addEventListener('mousemove', callback);
  canvas.addEventListener('mouseup', callback);
  canvas.addEventListener('dblclick', callback);
  canvas.addEventListener('click', callback);
  document.addEventListener('keydown', callback);
  document.addEventListener('keyup', callback);
}

// CONCATENATED MODULE: ./src/framework/Key.js
class Key {
  constructor(repeatable = false) {
    this.repeatable = repeatable;
    this.isDown = false;
  }
}

/* harmony default export */ var framework_Key = (Key);

// CONCATENATED MODULE: ./src/framework/utils/lowerCaseFirstLetter.js
function lowerCaseFirstLetter(str) {
  return str[0].toLowerCase() + str.substr(1);
}

// CONCATENATED MODULE: ./src/framework/Keyboard.js



class Keyboard_Keyboard {
  constructor(dispatchSignal) {
    this.dispatchSignal = dispatchSignal;
    this.createKeys();
  }
  processInput(input) {
    let key = lowerCaseFirstLetter(input.key);
    if (key === ' ') key = 'space';
    if (this[key]) {
      if (input.type === 'keydown') {
        if (!this[key].isDown || this[key].repeatable) {
          this.dispatchSignal(key + 'Down');
          if (input.keyCode > 47 && input.keyCode < 91) {
            this.dispatchSignal('letterKeyDown', {value: key});
          }
        }
        this[key].isDown = true;
      }
      else {
        this[key].isDown = false;
      }
    }
  }
  createKeys() {
    this.arrowUp = new framework_Key(true);
    this.arrowDown = new framework_Key(true);
    this.arrowLeft = new framework_Key(true);
    this.arrowRight = new framework_Key(true);
    this.space = new framework_Key();
    this.escape = new framework_Key();
    this.backspace = new framework_Key();
    this.a = new framework_Key();
    this.b = new framework_Key();
    this.c = new framework_Key();
    this.d = new framework_Key();
    this.e = new framework_Key();
    this.f = new framework_Key();
    this.g = new framework_Key();
    this.h = new framework_Key();
    this.i = new framework_Key();
    this.j = new framework_Key();
    this.k = new framework_Key();
    this.l = new framework_Key();
    this.m = new framework_Key();
    this.n = new framework_Key();
    this.o = new framework_Key();
    this.p = new framework_Key();
    this.q = new framework_Key();
    this.r = new framework_Key();
    this.s = new framework_Key();
    this.t = new framework_Key();
    this.u = new framework_Key();
    this.v = new framework_Key();
    this.w = new framework_Key();
    this.x = new framework_Key();
    this.y = new framework_Key();
    this.z = new framework_Key();
    this['1'] = new framework_Key();
    this['2'] = new framework_Key();
    this['3'] = new framework_Key();
    this['4'] = new framework_Key();
    this['5'] = new framework_Key();
    this['6'] = new framework_Key();
    this['7'] = new framework_Key();
    this['8'] = new framework_Key();
    this['9'] = new framework_Key();
    this['0'] = new framework_Key();
  }
}

/* harmony default export */ var framework_Keyboard = (Keyboard_Keyboard);

// CONCATENATED MODULE: ./src/framework/Mouse.js
class Mouse {
  constructor(dispatchSignal) {
      this.dispatchSignal = dispatchSignal;
      this.x = 0;
      this.y = 0;
    }
    processInput(input) {
      this.x = input.x;
      this.y = input.y;
      const coordinates = {x: input.x, y: input.y};
      if (input.type === 'click') {
        this.dispatchSignal('click', coordinates);
      }
      else if (input.type === 'dbclick') {
        this.dispatchSignal('doubleClick', coordinates)
      }
      else if (input.type === 'mousemove') {
        this.dispatchSignal('mouseMove', coordinates);
      }
      else if (input.type === 'mousedown') {
        this.dispatchSignal('mouseDown', coordinates);
      }
      else if (input.type === 'mouseup') {
        this.dispatchSignal('mouseUp', coordinates);
      }
    }
}

/* harmony default export */ var framework_Mouse = (Mouse);

// CONCATENATED MODULE: ./src/framework/Signal.js
class Signal {
  constructor() {
    this.subscribers = [];
  }
}

/* harmony default export */ var framework_Signal = (Signal);

// CONCATENATED MODULE: ./src/framework/Input.js





class Input_Input {
  constructor(canvas) {
    this.keyboard = new framework_Keyboard(this.dispatchSignal.bind(this));
    this.mouse = new framework_Mouse(this.dispatchSignal.bind(this));
    this.inputsQueue = [];
    this.signals = new Map();
    addDomEventListeners(canvas, this.addInputToQueue.bind(this));
  }
  addInputToQueue(input) {
    this.inputsQueue.push({
      type: input.type,
      key: input.key,
      x: input.offsetX,
      y: input.offsetY,
      keyCode: input.keyCode
    });
  }
  processInputsQueue() {
    for (const input of this.inputsQueue) {
      if (input.type === 'keydown' || input.type === 'keyup') {
        this.keyboard.processInput(input);
      }
      else {
        this.mouse.processInput(input);
      }
    }
    this.inputsQueue = [];
  }
  subscribeSignal(signalName, callback, context, key) {
    if (!this.signals.has(signalName)) {
      this.registerSignal(signalName);
    }
    this.signals.get(signalName).subscribers.push({callback, context, key});
    return key;
  }
  registerSignal(signalName) {
    this.signals.set(signalName, new framework_Signal());
  }
  dispatchSignal(signalName, data) {
    if (!this.signals.has(signalName)) return;
    this.signals.get(signalName).subscribers.forEach((subscriber) => subscriber.callback.call(subscriber.context, data));
  }
  removeSignalCallback(key, signalName) {
    const index = this.signals.get(signalName).subscribers.findIndex((subscriber) => subscriber.key === key);
    this.signals.get(signalName).subscribers.splice(index, 1);
  }
}

/* harmony default export */ var framework_Input = (Input_Input);

// CONCATENATED MODULE: ./src/framework/LocalStorage.js
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

/* harmony default export */ var framework_LocalStorage = (LocalStorage);

// CONCATENATED MODULE: ./src/framework/Quest.js
class Quest {
  constructor(game, questData, status, currentObjectiveIndex, aimCounter) {
    this.game = game;
    this.name = questData.name;
    this.reward = questData.reward;
    this.objectives = questData.objectives;
    this.requirements = questData.requirements;
    this.ownerName = questData.ownerName;
    this.dialogToTakeQuest = questData.dialogToTakeQuest;
    this.dialogsDependentOnQuestState = questData.dialogsDependentOnQuestState;
    this.currentObjectiveIndex = currentObjectiveIndex;
    this.aimCounter = aimCounter;
    this.id = questData.id;
    this.status = status;
  }
  update(msg) {
    if (this.status === 'finished') {
      return;
    }
    if (
      msg.action === this.objectives[this.currentObjectiveIndex].action &&
      msg.target === this.objectives[this.currentObjectiveIndex].target
    ) {
      this.aimCounter++;
      if (this.aimCounter >= this.objectives[this.currentObjectiveIndex].number) {
        this.currentObjectiveIndex++;
        if (!this.objectives[this.currentObjectiveIndex]) {
          this.complete();
        }
        else {
          this.aimCounter = 0;
        }
      }
    }
  }
  complete() {
    console.log('TODO: implement complete quest');
    /*
    this.currentObjectiveIndex++;
    this.game.player.exp += this.reward.exp;
    this.game.player.gold += this.reward.gold;
    this.active = false;
    this.finished = true;
    this.status = 2;
    this.game.console.addMessage(
      "Wykonano zadanie " + this.name + ". Otrzymano " +
      this.reward.gold + " sztuk złota i " +
      this.reward.exp + " punktów doświadczenia."
    );
    */
  }
}

/* harmony default export */ var framework_Quest = (Quest);

// CONCATENATED MODULE: ./src/framework/RenderManager.js
class RenderManager {
  constructor(game, width, height, domContainer) {
    this.game = game;
    this.width = width;
    this.height = height;
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    if (domContainer) {
      this.domContainer = document.getElementById(domContainer);
    }
    else {
      this.domContainer = document.body;
    }
    this.domContainer.appendChild(this.canvas);
  }
  render() {
    for (const layer of this.game.sceneManager.currentScene.layers) {
      this.context.drawImage(layer.canvas, layer.x, layer.y, layer.canvas.width, layer.canvas.height);
      layer.context.clearRect(layer.x, layer.y, layer.canvas.width, layer.canvas.height);
    }
  }
}

/* harmony default export */ var framework_RenderManager = (RenderManager);

// CONCATENATED MODULE: ./src/framework/CanvasLayer.js
class CanvasLayer {
  constructor(name, indexOrder = 0, width = 800, height = 600, x = 0, y = 0) {
    this.name = name;
    this.indexOrder = indexOrder;
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    this.context = this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
  }
}

/* harmony default export */ var framework_CanvasLayer = (CanvasLayer);

// CONCATENATED MODULE: ./src/framework/defaultScene.js


const defaultScene = {
  layers: [new framework_CanvasLayer('layer')],
  sceneEntities: [],
  update({layer}) {
    layer.font = '50px Georgia';
    layer.fillText('The current scene is not set', 100, 100);
  },
  exit() {
    // empty function
  }
};

/* harmony default export */ var framework_defaultScene = (defaultScene);

// CONCATENATED MODULE: ./src/framework/Scene.js


const empty = () => {};

class Scene_Scene {
  constructor(game, name, {update, init = empty , enter = empty, exit = empty, methods = {}, data = {}}) {
    this.game = game;
    this.name = name;
    this.init = init.bind(this);
    this.enter = enter.bind(this);
    this.exit = exit.bind(this);
    this.update = update.bind(this);
    this.methods = Object.keys(methods);
    this.methods.forEach((method) => {
      this[method] = methods[method].bind(this);
    });
    Object.keys(data).forEach((key) => {
      this[key] = data[key];
    });
    this.sceneEntities = [];
    this.layers = [];
    this.signalListenersKeys = {};
    this.init();
  }
  addCanvasLayer(name, indexOrder = 0, width = 960, height = 704, x = 0, y = 0) {
    const canvasLayer = new framework_CanvasLayer(name, indexOrder, width, height, x, y);
    this.layers.push(canvasLayer);
    this.layers.sort((a, b) => a.indexOrder - b.indexOrder);
    return canvasLayer.context;
  }
  translateLayer(name, x, y) {
    for (let i = 0; i < this.layers.length; i++) {
      if (this.layers[i].name === name) {
        this.layers[i].context.translate(x, y);
        return;
      }
    }
  }
  addSceneEntity(entity) {
    if (!(typeof entity.update === 'function')) {
      throw new Error('Update function is required in a scene entity');
    }
    entity.game = this.game;
    this.sceneEntities.push(entity);
  }
  addSignalListeners(listeners) {
    Object.keys(listeners).forEach((signalName) => {
      const listenerKey = this.name + signalName + 'listenerKey';
      this.game.input.subscribeSignal(signalName, listeners[signalName], this, listenerKey);
      this.signalListenersKeys[signalName] = listenerKey;
    });
  }
  removeSignalListeners() {
    Object.keys(this.signalListenersKeys).forEach((signalName) => {
      this.game.input.removeSignalCallback(this.signalListenersKeys[signalName], signalName);
    });
  }
}

/* harmony default export */ var framework_Scene = (Scene_Scene);

// CONCATENATED MODULE: ./src/framework/SceneManager.js



class SceneManager_SceneManager {
  constructor(game) {
    this.game = game;
    this.scenes = new Map();
    this.currentScene = framework_defaultScene;
    this.previousScene = null;
    this.storagedScene = null;
  }
  addScene(name, sceneObject) {
    this.scenes.set(name, new framework_Scene(this.game, name, sceneObject));
  }
  changeCurrentScene(name, args, storageCurrentScene) {
    this.currentScene.exit();
    if (storageCurrentScene) {
      this.storagedScene = this.currentScene;
    }
    this.previousScene = this.currentScene;
    if (name === 'loadStoragedScene') {
      this.currentScene = this.storagedScene;
    }
    else {
      this.currentScene = this.scenes.get(name);
    }
    this.currentScene.enter(args);
  }
  returnToPreviousScene(args) {
    if (this.previousScene) {
      this.currentScene.exit();
      this.currentScene = this.previousScene;
      this.previousScene = null;
      this.currentScene.enter(args);
    }
  }
  update() {
    const contexts = {};
    for (let i = 0; i < this.currentScene.layers.length; i++) {
      const layer = this.currentScene.layers[i];
      contexts[layer.name] = layer.context;
    }
    this.currentScene.update(contexts);
    for (let i = 0; i < this.currentScene.sceneEntities.length; i++) {
      this.currentScene.sceneEntities[i].update(contexts);
    }
  }
}

/* harmony default export */ var framework_SceneManager = (SceneManager_SceneManager);

// CONCATENATED MODULE: ./src/framework/time.js
const time = {
  timeCounter: null,
  days: null,
  hours: null,
  minutes: null,
  printCurrentTime() {
    let minutes;
    let hours;
    let days = this.days + 1;
    this.minutes <= 9 ? minutes = '0' + this.minutes : minutes = this.minutes;
    this.hours <= 9 ? hours = '0' + this.hours : hours = this.hours;
    return 'Dzień: ' + days + ' | Godzina: ' + hours + ':' + minutes;
  },
  update() {
    this.timeCounter++;
    this.days = Math.floor(this.timeCounter / 47520);
    this.hours = Math.floor(this.timeCounter / 1980) - 24 * this.days;
    this.minutes = Math.floor(this.timeCounter / 33) - 60 * (this.hours + 24 * this.days);
  },
  init(timeCounter = 0) {
    this.timeCounter = timeCounter;
  },
  skipHours(hours) {
    this.timeCounter += hours * 1980;
  }
}

/* harmony default export */ var framework_time = (time);

// CONCATENATED MODULE: ./src/framework/Game.js










class Game_Game {
  constructor(width = 960, height = 704, domContainer = null) {
    this.renderManager = new framework_RenderManager(this, width, height, domContainer);
    this.sceneManager = new framework_SceneManager(this);
    this.input = new framework_Input(this.renderManager.canvas);
    this.dataManager = new framework_DataManager();
    this.localStorage = new framework_LocalStorage();
    this.loadedState = this.localStorage.loadGameState();
    this.step = this.step.bind(this);
    this.time = framework_time;
    this.quests = [];
    this.gameEntities = [];
    this.console = new framework_Console();
    this.loadQuests();
    if (this.loadedState !== null) {
      this.time.init(this.loadedState.time.timeCounter);
    }
    else {
      this.time.init(0);
    }
    domContentLoaded(this.boot.bind(this));
  }
  boot() {
    requestAnimationFrame(this.step);
  }
  step(timestamp) {
    this.input.processInputsQueue();
    for (let i = 0; i < this.gameEntities.length; i++) {
      if (this.gameEntities[i].isActive) {
        this.gameEntities[i].update(this.sceneManager.currentScene.layers);
      }
    }
    this.sceneManager.update();
    this.time.update();
    this.renderManager.render(this.sceneManager.currentScene.layers);
    requestAnimationFrame(this.step);
  }
  notifyAction(message) {
    for (let i = 0; i < this.quests.length; i++) {
      this.quests[i].update(message);
    }
  }
  addScene(name, sceneObject) {
    this.sceneManager.addScene(name, sceneObject)
  }
  changeCurrentScene(name, args, storageCurrentScene) {
    this.sceneManager.changeCurrentScene(name, args, storageCurrentScene);
  }
  returnToPreviousScene(args) {
    this.sceneManager.returnToPreviousScene(args);
  }
  addGameEntity(entity) {
    if (!(typeof entity.update === 'function')) {
      throw new Error('Update function is required in a scene entity');
    }
    entity.game = this;
    entity.isActive = true;
    this.gameEntities.push(entity);
  }
  addQuest(questData, status = 'toTake', currentObjectiveIndex = 0, aimCounter = 0) {
    this.quests.push(new framework_Quest(this, questData, status, currentObjectiveIndex, aimCounter));
  }
  loadQuests() {
    const questsData = this.dataManager.getQuestsData();
    if (this.loadedState !== null) {
      for (let i = 0; i < questsData.length; i++) {
        const questState = this.loadedState.quests[i];
        this.addQuest(questsData[i], questState.status, questState.currentObjectiveIndex, questState.aimCounter);
      }
    }
    else {
      for (let i = 0; i < questsData.length; i++) {
        this.addQuest(questsData[i]);
      }
    }
  }
}

/* harmony default export */ var framework_Game = (Game_Game);

// CONCATENATED MODULE: ./src/gameScenes/introScene.js
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

/* harmony default export */ var gameScenes_introScene = (introScene);

// CONCATENATED MODULE: ./src/gameScenes/mainMenuScene.js




const mainMenuScene = {
  init() {
    this.alpha = 0;
    this.gameIsPaused = false;
    this.loadedData = this.game.localStorage.loadGameState();
    this.gameHasSavedState = this.game.loadedState === null ? false : true;
    this.continueGameButton = new guiElements_Button(320, 90, 320, 80, 'img/buttons/continue_button.png');
    this.startNewGameButton = new guiElements_Button(320, 190, 320, 80, 'img/buttons/new_game_button.png');
    this.saveGameStateButton = new guiElements_Button(320, 290, 320, 80, 'img/buttons/save_game_button.png');
    this.optionsButton = new guiElements_Button(320, 390, 320, 80, 'img/buttons/options_button.png');
    this.returnToGameButton = new guiElements_Button(320, 490, 320, 80, 'img/buttons/return_button.png');
    this.addCanvasLayer('Layer1');
  },
  enter({gameIsPaused = false} = {}) {
    this.gameIsPaused = gameIsPaused;
    this.addSignalListeners({click: this.onClickButton, escapeDown: this.returnToGame});
  },
  exit() {
    this.removeSignalListeners();
  },
  update({Layer1}) {
    this.draw(Layer1);
    this.alpha += 0.03;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
  },
  methods: {
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.fillStyle = 'rgb(0,0,0)';
      Layer1.fillRect(0, 0, 960, 704);
      if (this.gameHasSavedState) {
        Layer1.drawImage(
          this.continueGameButton.sprite,
          this.continueGameButton.x,
          this.continueGameButton.y,
          this.continueGameButton.width,
          this.continueGameButton.height
        );
      }
      if (!this.gameIsPaused) {
        Layer1.drawImage(
          this.startNewGameButton.sprite,
          this.startNewGameButton.x,
          this.startNewGameButton.y,
          this.startNewGameButton.width,
          this.startNewGameButton.height
        );
      }
      Layer1.drawImage(
        this.optionsButton.sprite,
        this.optionsButton.x,
        this.optionsButton.y,
        this.optionsButton.width,
        this.optionsButton.height
      );
      if (this.gameIsPaused) {
        Layer1.drawImage(
          this.saveGameStateButton.sprite,
          this.saveGameStateButton.x,
          this.saveGameStateButton.y,
          this.saveGameStateButton.width,
          this.saveGameStateButton.height
        );
        Layer1.drawImage(
          this.returnToGameButton.sprite,
          this.returnToGameButton.x,
          this.returnToGameButton.y,
          this.returnToGameButton.width,
          this.returnToGameButton.height
        );
      }
    },
    onClickButton({x, y}) {
      if (pointInsideRectangle(x, y, this.continueGameButton) && !this.gameIsPaused && this.gameHasSavedState) {
        const playerData = this.game.loadedState.player;
        createPlayer(this.game, playerData);
        this.game.sceneManager.changeCurrentScene(
          'startLevel',
          {
            setPlayerPosition: true,
            playerPositionX: playerData.playerPositionX,
            playerPositionY: playerData.playerPositionY
          }
        );
      }
      else if (pointInsideRectangle(x, y, this.startNewGameButton)) {
        if (confirm('Starting a new game will delete your progress. Do you want to continue?')) {
          localStorage.clear();
          this.game.sceneManager.changeCurrentScene('intro');
        }
      }
      else if (pointInsideRectangle(x, y, this.saveGameStateButton) && this.gameIsPaused) {
        this.game.localStorage.saveGameState(this.game);
      }
      else if (pointInsideRectangle(x, y, this.returnToGameButton)) {
        this.returnToGame();
      }
    },
    returnToGame() {
      if (this.gameIsPaused) {
        this.game.sceneManager.changeCurrentScene('loadStoragedScene');
      }
    }
  }
};

/* harmony default export */ var gameScenes_mainMenuScene = (mainMenuScene);

// CONCATENATED MODULE: ./src/gameScenes/openingChestScene.js



const openingChestScene = {
  init() {
    this.alpha = 0;
    this.returnButton = new guiElements_Button (40, 610, 160, 80, "img/btn_back.png");
    this.leftArrowSprite = new Image();
    this.leftArrowSprite.src = 'img/left_arrow.png';
    this.rightArrowSprite = new Image();
    this.rightArrowSprite.src = 'img/right_arrow.png';
    this.addCanvasLayer('Layer1');
  },
  enter(chest) {
    this.chest = chest;
    this.alpha = 0;
    this.playerMoves = [];
    this.opened = false;
    this.game.player.canMove = false;
    this.game.player.canToggleWindow = false;
    for (let i = 0; i < this.game.player.equipment.inventory.itemSlots.length; i++) {
      if (
        this.game.player.equipment.inventory.itemSlots[i].item &&
        this.game.player.equipment.inventory.itemSlots[i].item.type === 'lockpick'
      ) {
        this.slotWithLockpicks = this.game.player.equipment.inventory.itemSlots[i];
        break;
      }
    }
    this.playerLockpiks = this.slotWithLockpicks ? this.slotWithLockpicks.stackAmount : 0;
    this.addSignalListeners(
      {click: this.onClick, arrowLeftDown: this.onArrowLeftDown, arrowRightDown: this.onArrowRightDown}
    );
  },
  update({Layer1}) {
    this.alpha += 0.05;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
    if (this.playerMoves.length === this.chest.openingCode.length && !this.opened) {

      this.game.console.addMessage('Udało ci się otworzyć zamek!');
      this.opened = true;
    }
    this.draw(Layer1);
  },
  exit() {
    this.removeSignalListeners();
    this.game.player.canMove = true;
    this.game.player.canToggleWindow = true;

    // aktualizacja ilości wytrychów w ekwipunku gracza
    if (this.slotWithLockpicks) {
      this.slotWithLockpicks.stackAmount = this.playerLockpiks;
    }

    // jeśli skrzynia została otwarta, to usuń ją z mapy
    if (this.opened) {
      const index = this.game.sceneManager.previousScene.chests.findIndex((chest) => chest === this.chest);
      this.game.sceneManager.previousScene.chests.splice(index, 1);
    }
  },
  methods: {
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.returnButton)) {
        this.game.sceneManager.changeCurrentScene(
          'startLevel',
          {playerPositionX: this.game.player.rectShape.x , playerPositionY: this.game.player.rectShape.y}
        );
      }
    },
    onArrowLeftDown() {
      this.updateMove('left');
    },
    onArrowRightDown() {
      this.updateMove('right');
    },
    draw(Layer1) {
      Layer1.fillStyle = 'black';
      Layer1.fillRect(0, 0, 960, 704);
      if (this.playerMoves.length > 0) {
        const centerElement = Math.floor(this.playerMoves.length / 2);
        const centerElementXPosition = 375 - (this.playerMoves.length % 2 === 0 ? 0 : 55);
        Layer1.save();
        Layer1.fillStyle = 'rgb(99, 92, 142)';
        Layer1.globalAlpha = 0.5;
        Layer1.fillRect(
          centerElementXPosition - centerElement * 110 + 50,
          280,
          (this.playerMoves.length + 1) * 110,
          140
        );
        Layer1.restore();

        // rysowanie ruchów gracza
        for (let i = 0; i < this.playerMoves.length; i++) {
          if (this.playerMoves[i] === 'left') {
            Layer1.drawImage(this.leftArrowSprite, centerElementXPosition + (i + 1 - centerElement) * 110, 300);
          }
          else {
            Layer1.drawImage(this.rightArrowSprite, centerElementXPosition + ( i + 1 - centerElement) * 110, 300);
          }
        }
      }
      this.game.console.draw(Layer1);

      // rysowanie ilości wytrychów gracza
      Layer1.save();
      Layer1.fillStyle = 'white';
      Layer1.font = '45px Georgia';
      Layer1.fillText('Ilość wytrychów w plecaku: ' + this.playerLockpiks, 200, 60);
      Layer1.restore();

      // przycisk do wyjścia
      Layer1.drawImage(
        this.returnButton.sprite,
        this.returnButton.x,
        this.returnButton.y,
        this.returnButton.width,
        this.returnButton.height
      );
    },
    updateMove(playerMove) {

      // gracz nie ma wytrychów
      if (this.playerLockpiks === 0) {
        this.game.console.addMessage('Brak wytrychów w plecaku!');
        return;
      }

      // ruch gracza był prawidłowy
      if (playerMove === this.chest.openCode[this.playerMoves.length]) {
        this.playerMoves.push(playerMove);

        /*
        // wcześniejszy dźwięk jeszcze się nie skończył - zrestartuj go
        if (!sounds.chest1.ended) {
          sounds.chest1.currentTime = 0;
        }
        sounds.chest1.play();
        */
        this.game.console.addMessage('Dobrze.');
      }

      // ruch gracza nie był prawidłowy
      else {
        this.playerMoves = [];
        this.game.console.addMessage('Ups... Pomyłka.');

        // test umiejętności otwierania zamków - nieudany powoduje utratę wytrychu
        if (!this.game.player.skills.skillCheck('openLocks')) {
          this.playerLockpiks--;
          this.game.console.addMessage('Złamał ci się wytrych!');
        }
      }
    }
  }
};

/* harmony default export */ var gameScenes_openingChestScene = (openingChestScene);

// CONCATENATED MODULE: ./src/framework/utils/collisionDetection.js
function collisionDetection(rectangle1, rectangle2) {
  return ((rectangle1.x + rectangle1.width >= rectangle2.x) &&
         (rectangle1.x <= rectangle2.x + rectangle2.width) &&
         (rectangle1.y + rectangle1.height >= rectangle2.y) &&
         (rectangle1.y <= rectangle2.y + rectangle2.height));
}

// CONCATENATED MODULE: ./src/framework/Chest.js




class Chest_Chest {
  constructor(game, x, y, sprite, openingCodeLength) {
    this.game = game;
    this.rectShape = new framework_RectangleShape(x, y, 50, 50);
    this.sprite = new Image(50, 50);
    this.sprite.src = sprite;
    this.openingCode = [];
    this.generateOpeningCode(openingCodeLength);
  }
  update(ctx) {
    if (this.game.input.keyboard.space.isDown && collisionDetection(this.rectShape, this.game.player.rectShape)) {
      this.game.sceneManager.changeCurrentScene('openingChestScene', this);
    }
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
  }
  generateOpeningCode(openingCodeLength) {
    for (let i = 0; i < openingCodeLength; i++) {
      const rand = randomNumber_randomNumber(2);
      if (rand === 0) this.openingCode.push('left');
      else this.openingCode.push('right');
    }
  }
}

/* harmony default export */ var framework_Chest = (Chest_Chest);

// CONCATENATED MODULE: ./src/framework/Enemy.js




class Enemy_Enemy {
  constructor(game, healthBar, healthBarWrapper, monster, index) {
    this.game = game;
    this.healthBar = healthBar;
    this.healthBarWrapper = healthBarWrapper;
    this.sprite = new Image();
    this.sprite.src = monster.sprite;
    this.healthPoints = monster.hp;
    this.maxHealthPoints = monster.hp;
    this.name = monster.name + index;
    this.type = monster.name;
    this.damage = monster.dmg;
    this.canAttack = false;
    this.expReward = monster.expReward;
    this.moveVariable = 0;
    this.moveLeft = false;
    this.moveRight = false;
    this.index = index;
    this.fightStatuses = new framework_FightStatuses();
    this.width = monster.width;
    this.height = monster.height;
    this.drawX = 750;
    this.drawY = 270;
  }
  update(ctx, index) {
    if (this.healthPoints < 1) {
      this.die();
    }
    if (this.canAttack) {
      if (this.fightStatuses.stun) {
        this.delayNextAttack(5000);
        this.fightStatuses.stun = false;
      }
      else {
        this.moveLeft = true;
        this.attack();
        this.delayNextAttack(3000 + randomNumber_randomNumber(2000));
      }
      this.canAttack = false;
    }
    if (this.moveLeft) {
      this.moveVariable -= 3;
      if (this.moveVariable <= -70) {
        this.moveLeft = false;
        this.moveRight = true;
      }
    }
    if (this.moveRight) {
      this.moveVariable += 3;
      if (this.moveVariable >= 0) {
        this.moveRight = false;
      }
    }
    this.draw(ctx, index);
  }
  draw(ctx , i) {
    ctx.drawImage(
      this.healthBarWrapper,
      (this.drawX + 40) + this.moveVariable,
      (this.drawY - 15) + i * this.height,
      106,
      25
    );
    ctx.drawImage(
      this.healthBar,
      (this.drawX + 43) + this.moveVariable,
      (this.drawY - 12) + i * this.height,
      this.healthPoints / this.maxHealthPoints * 100,
      20
    );
    ctx.drawImage(
      this.sprite,
      this.drawX + this.moveVariable,
      this.drawY + i * this.height,
      this.width,
      this.height
    );
    if (this === this.game.sceneManager.currentScene.encounter.actualTarget) {
      ctx.drawImage(
        this.game.sceneManager.currentScene.encounter.pointerSprite,
        (this.drawX + 60) + this.moveVariable,
        (this.drawY - 50) + i * this.height,
        40,
        60
      );
    }
    if (this.fightStatuses.stun) {
      this.displayFightStatus(ctx, 'Ogłuszony', 'yellow', i)
    }
  }
  displayFightStatus(ctx, status, color, i) {
    ctx.save();
    ctx.strokeStyle = 'black';
    ctx.fillStyle = color;
    ctx.font = '30px Georgia';
    ctx.strokeText(status, (this.drawX + 20), (this.drawY - 20) + i * this.height);
    ctx.fillText(status, (this.drawX + 20), (this.drawY - 20) + i * this.height);
    ctx.restore();
  }
  attack() {
    const dmg = this.damage + randomNumber_randomNumber(5) + 1;
    this.game.sceneManager.currentScene.playerDuringFight.getDamage(dmg, this.name);
  }
  getDamage(dmg) {
    this.healthPoints -= dmg;
    this.game.console.addMessage('Zadałeś ' + this.name + ' ' + dmg + ' punktów obrażeń!');
    createFloatingText(this.game.sceneManager.currentScene.floatingTexts ,dmg, this.drawX + 70, this.drawY + this.index * this.height, "red", 4500);
  }
  die() {
    this.game.notifyAction({action: 'kill' , target: this.type});
    this.game.sceneManager.currentScene.encounter.expPool += this.expReward;
    this.game.console.addMessage('Przeciwnik ' + this.name + ' zginął!');
    const index = this.game.sceneManager.currentScene.encounter.encounterEnemies.indexOf(this);
    this.game.sceneManager.currentScene.encounter.encounterEnemies.splice(index, 1);
    this.game.sceneManager.currentScene.encounter.pointerCounter--;
    if (this.game.sceneManager.currentScene.encounter.pointerCounter === -1){
      this.game.sceneManager.currentScene.encounter.pointerCounter = 0;
    }
    this.game.sceneManager.currentScene.encounter.actualTarget = this.game.sceneManager.currentScene.encounter.encounterEnemies[this.game.sceneManager.currentScene.encounter.pointerCounter];
  }
  delayNextAttack(delay) {
    setTimeout(() => {

      // check if enemy is alive after timeout
      if (this) {
        this.canAttack = true;
      }
    }, delay);
  }
}

/* harmony default export */ var framework_Enemy = (Enemy_Enemy);

// CONCATENATED MODULE: ./src/framework/Encounter.js



class Encounter_Encounter {
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
      this.encounterEnemies.push(new framework_Enemy(
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
    const rand = randomNumber_randomNumber(1000) + 1;
    const lootTable = this.game.dataManager.getLootTable(this.game.player.level);
    const loot = lootTable.find(loot => loot.min >= rand && loot.max <= rand);
    if (loot) {
      const itemData = this.dataManager.getItemData(loot.type, loot.id)
      this.game.console.addMessage('Zdobyto' + itemData.name + '!');
      this.game.player.equipment.addItemToInventory(new Item(itemData));
    }
  }
}

/* harmony default export */ var framework_Encounter = (Encounter_Encounter);

// CONCATENATED MODULE: ./src/framework/DialogBox.js





class DialogBox_DialogBox {
  constructor(game, quest = {}) {
    this.game = game;
    this.quest = quest;
    if (quest.status === 'toTake') {
      this.npcDialog = wrapTextLines(quest.dialogToTakeQuest.npcDialog, 35);
      this.playerAnswers = quest.dialogToTakeQuest.answers;
    }
    else if (quest.status === 'active'){
      this.npcDialog = wrapTextLines(quest.dialogsDependentOnQuestState[quest.currentObjectiveIndex].npcDialog);
      this.playerAnswers = quest.dialogsDependentOnQuestState[quest.currentObjectiveIndex].answers;
    }
    else {
      this.npcDialog = 'Dodaj jakieś losowe dialogi';
    }
    this.sprite = new Image(800, 300);
    this.sprite.src = 'img/dialogbox.png';
    this.dialogState = true;
    this.answerState = false;
    this.textLinesCounter = 0;
    this.chosenAnswer = false;
    this.hoverAnswer;
    this.game.player.canMove = false;
    throttleProperty(this.game.player, 'canToggleWindow', false, 1000);
    this.game.input.subscribeSignal('click', this.onClick, this, 'dialogBoxClick');
    this.game.sceneManager.currentScene.activeNpc.canMove = false;
    this.game.sceneManager.currentScene.activeNpc.isActiv = true;
  }
  update(ctx) {
    if (this.dialogState) {
      if (this.game.input.keyboard.space.isDown && this.game.player.canToggleWindow) {
        this.textLinesCounter += 5;
        throttleProperty(this.game.player, 'canToggleWindow', false, 500);
        if (this.textLinesCounter >= this.npcDialog.length) {
          this.dialogState = false;
          if (this.playerAnswers) {
            this.answerState = true;
          }
        }
      }
    }
    else if (this.answerState && !this.chosenAnswer) {
      this.hoverAnswer = null;
      for (let i = 0; i < this.playerAnswers.length; i++) {
        if (pointInsideRectangle(
          this.game.input.mouse.x,
          this.game.input.mouse.y,
          {x: 152, y: 496 + i * 28, width: 696, height: 28}
        )) {
          this.hoverAnswer = i + 1;
        }
      }
      if (this.playerAnswers[0] && this.game.input.keyboard['1'].isDown) {
        this.onChooseAnswer(0);
      }
      else if (this.playerAnswers[1] && this.game.input.keyboard['2'].isDown) {
        this.onChooseAnswer(1);
      }
      else if (this.playerAnswers[2] && this.game.input.keyboard['3'].isDown) {
        this.onChooseAnswer(2);
      }
      else if (this.playerAnswers[3] && this.game.input.keyboard['4'].isDown) {
        this.onChooseAnswer(3);
      }
    }
    else {
      this.terminate();
    }
    this.draw(ctx);
  }
  draw(ctxHUD) {
    ctxHUD.drawImage(this.sprite, 100, 410, this.sprite.width, this.sprite.height);
    ctxHUD.fillStyle = 'white';
    ctxHUD.font = '22px Georgia';
    if (this.dialogState) {
      for (let i = this.textLinesCounter; i <= this.textLinesCounter + 4 && i < this.npcDialog.length; i++) {
        const row = this.npcDialog[i];
        let x = 175;
        const y = i * 30 + 516;
        displayStyledText(row, ctxHUD, x, y);
      }
      ctxHUD.fillText('<Spacja>', 460, 653);
    }
    else if (this.answerState && !this.chosenAnswer) {
      if (this.hoverAnswer) {
        ctxHUD.save();
        ctxHUD.globalAlpha = 0.6;
        ctxHUD.fillStyle = 'black';
        ctxHUD.fillRect(152, 496 + (this.hoverAnswer - 1) * 30, 696, 28);
        ctxHUD.restore();
      }
      for (let i = 0; i < this.playerAnswers.length; i++) {
        ctxHUD.fillText(this.playerAnswers[i].response, 175, 516 + 30 * i);
      }
    }
  }
  onClick({x, y}) {
    for (let i = 0; i < this.playerAnswers.length; i++) {
      if (pointInsideRectangle(
        x,
        y,
        {x: 152, y: 496 + i * 28, width: 696, height: 28}
      )) {
        this.onChooseAnswer(i);
      }
    }
  }
  onChooseAnswer(answerIndex) {
    this.chosenAnswer = true;
    for (const consequence of this.playerAnswers[answerIndex].consequences) {
      this.responseToAnswer(consequence.action, consequence.value);
    }
  }
  terminate() {
    this.game.player.canMove = true;
    this.game.sceneManager.currentScene.activeNpc.canMove = true;
    this.game.sceneManager.currentScene.activeNpc.isActiv = false;
    throttleProperty(this.game.player, 'canToggleWindow', false, 1000);
    this.game.input.removeCallback('dialogBoxClick', 'click');
    this.game.sceneManager.currentScene.activDialogBox = null;
  }
  responseToAnswer(action, value) {
    switch (action) {
      case 'end dialog':
        break;
      case 'accept quest':
        this.quest.status = 'active';
        this.quest.currentObjectiveIndex = 0;
        this.game.console.addMessage('Przyjęto zadanie: ' + this.quest.name);
        this.game.sceneManager.currentScene.activeNpc.hasQuestExclamationMark = false;
        break;
      default: break;
    }
  }
  checkDialogCondition(condition) {
    switch (condition) {
      case 'persuasion':
        return this.game.player.skills.skillCheck('persuasion');
      default:
        return;
    }
  }
}

/* harmony default export */ var framework_DialogBox = (DialogBox_DialogBox);

// CONCATENATED MODULE: ./src/framework/Npc.js





class Npc_Npc {
  constructor(game, spriteFile, x, y, isStatic, name, questsIds, isVendor) {
    this.game = game;
    this.sprite = new Image(50, 70);
    this.sprite.src = spriteFile;
    this.rectShape = new framework_RectangleShape(x, y, 50, 70);
    this.speed = 3;
    this.isMoving = false;
    this.canMove = true;
    this.canMoveUp = true;
    this.canMoveDown = true;
    this.canMoveLeft = true;
    this.canMoveRight = true;
    this.direction = 0; // 0 DOWN 1 LEFT 2 RIGHT 3 UP
    this.frameCounter = 0;
    this.timeToNextFrame = 0;
    this.isStatic = isStatic;
    this.name = name;
    this.isActiv = false;
    this.questExclamationMark = new Image();
    this.questExclamationMark.src = 'img/wykrzyknik.png';
    this.questsIds = questsIds;
    this.isVendor = isVendor;
    this.hasQuestExclamationMark = this.questsIds ? true : false;
    setInterval(() => {
      this.generateDirection();
    }, randomNumber_randomNumber(3000) + 1000);
  }
  draw(ctx) {
    if (this.isStatic) {
      ctx.drawImage(
        this.sprite,
        this.rectShape.x - this.sprite.width / 2,
        this.rectShape.y - this.sprite.height / 2,
        this.sprite.width,
        this.sprite.height
      );
    }
    else {
      ctx.drawImage(this.sprite,
        32 * this.frameCounter,
        48 * this.direction,
        32,
        48,
        this.rectShape.x - this.sprite.width / 2,
        this.rectShape.y - this.sprite.height / 2,
        this.sprite.width,
        this.sprite.height
      );
    }
    ctx.save();
    ctx.fillStyle = 'white';
    ctx.font = '25px Georgia';
    ctx.fillText(
      this.name,
      this.rectShape.x - 10 - this.sprite.width / 2,
      this.rectShape.y - 5 - this.sprite.height / 2
    );
    ctx.restore();
    if (this.hasQuestExclamationMark) {
      ctx.drawImage(
        this.questExclamationMark,
        this.rectShape.x - 15,
        this.rectShape.y - this.sprite.height / 2 - 90,
        25,
        70
      );
    }
  }
  update(ctx) {
    /*
    if (
      this.game.input.keyboard.space.isDown &&
      collisionDetection(this.rectShape, this.game.player.rectShape) &&
      !this.isActiv &&
      this.game.player.canToggleWindow
    ) {
      this.isActiv = true;
      this.canMove = false;
      if (this.isVendor) {
        this.isActiv = false
        this.game.sceneManager.changeCurrentScene('shopScene');
        return;
      }
      let quest;
      if (this.questsIds) {
        quest = this.game.quests.find((quest) => quest.id === this.questsIds[0] && quest.status !== 'finished');
      }
      this.game.sceneManager.currentScene.activDialogBox = new DialogBox(this.game, quest);
      this.game.notifyAction({action: 'talk', target: this.name});
    }
    */
    if (!this.isStatic) {
      this.move();
    }
    this.draw(ctx);
  }
  move() {
    if (!this.canMove) {
      this.frameCounter = 0;
      return;
    }
    this.blockOnSceneEdge();
    if (this.direction === 0 && this.canMoveDown) {
      this.rectShape.y += this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 1 && this.canMoveLeft) {
      this.rectShape.x -= this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 2 && this.canMoveRight) {
      this.rectShape.x += this.speed;
      this.isMoving = true;
    }
    else if (this.direction === 3 && this.canMoveUp) {
      this.rectShape.y -= this.speed;
      this.isMoving = true;
    }
    if (this.isMoving) {
      this.timeToNextFrame++;
      if (this.timeToNextFrame > 13) {
        this.timeToNextFrame = 0;
        this.frameCounter++;
        if (this.frameCounter > 3) {
          this.frameCounter = 0;
        }
      }
    }
  }
  generateDirection() {
    //if (this.game.stateManager.currentLevel === null) return;
    //if (this.game.stateManager.currentLevel.activDialogBox && this.game.stateManager.currentLevel.activDialogBox.isActiv) {
    //  return;
  //  }
    let rand = randomNumber_randomNumber(5);
    if (rand < 4) {
      this.direction = rand;
      this.canMove = true;
    }
    else {
      this.canMove = false;
    }
  }
  blockOnSceneEdge() {
    if (this.rectShape.x + this.rectShape.width > this.game.sceneManager.currentScene.width) {
      this.canMoveRight = false;
      this.generateDirection();
    }
    else {
      this.canMoveRight = true;
    }
    if (this.rectShape.x < 0) {
      this.canMoveLeft = false;
      this.generateDirection();
    }
    else {
      this.canMoveLeft = true;
    }
    if (this.rectShape.y + this.rectShape.width + 20 > this.game.sceneManager.currentScene.height) {
      this.canMoveDown = false;
      this.generateDirection();
    }
    else {
      this.canMoveDown = true;
    }
    if (this.rectShape.y < 0) {
      this.canMoveUp = false;
      this.generateDirection();
    }
    else {
      this.canMoveUp = true;
    }
  }
}

/* harmony default export */ var framework_Npc = (Npc_Npc);

// CONCATENATED MODULE: ./src/framework/PickableItem.js
class PickableItem {
  constructor(x, y, width, height, itemData) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.sprite = new Image(width, height);
    this.sprite.src = itemData.spriteSrc;
    this.name = itemData.name;
    this.id = itemData.id;
    this.itemData = itemData;
  }
  update(ctx) {
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, this.x, this.y, this.sprite.width, this.sprite.height);
  }
}

/* harmony default export */ var framework_PickableItem = (PickableItem);

// CONCATENATED MODULE: ./src/framework/Shrine.js



class Shrine_Shrine {
  constructor(game, x, y) {
    this.game = game;
    this.rectShape = new framework_RectangleShape(x, y, 150, 200);
    this.sprite = new Image(150, 200);
    this.sprite.src = 'img/kapliczka.png';
  }
  update(ctx) {
    if (
      this.game.input.keyboard.space.isDown &&
      !this.game.player.isAlive &&
      collisionDetection(this.rectShape, this.game.player.rectShape)
    ) {
      console.log('TODO: player resurrection in shrine');
      /*this.game.player.isAlive = true;
      this.game.player.healthPoints = this.game.player.maxHealthPoints / 2;
      const expPenalty = 500;
      this.game.player.exp -= expPenalty;
      if (this.game.player.exp < 0) {
        this.game.player.exp = 0;
      }
      this.game.console.addMessage("Wskrzeszono bohatera. Odjęto " + expPenalty +" punktów doświadczenia.");
      */
    }
    this.draw(ctx);
  }
  draw(ctx) {
    ctx.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
  }
}

/* harmony default export */ var framework_Shrine = (Shrine_Shrine);

// CONCATENATED MODULE: ./src/framework/Teleport.js




class Teleport_Teleport {
  constructor(game, x, y, destinationScene, destinationLevelName, destinationX, destinationY) {
    this.game = game;
    this.sprite = new Image(100, 100);
    this.sprite.src = 'img/teleport.png';
    this.rectShape = new framework_RectangleShape(x, y, 100, 100);
    this.destinationScene = destinationScene;
    this.destinationLevelName = destinationLevelName;
    this.destinationPosition = new framework_Vector2(destinationX, destinationY);
    this.displayPopup = false;
    this.popup = new Image();
    this.popup.src = 'img/dialogbox.png';
  }
  update(Layer1, HUDLayer) {
    if (collisionDetection(this.rectShape, this.game.player.rectShape)) {
      this.displayPopup = true;
      if (this.game.input.keyboard.space.isDown) {
        this.game.console.addMessage('Przeniesiono się na scenę: ' + this.destinationScene);
        this.game.sceneManager.changeCurrentScene(
          this.destinationScene,
          {
            setPlayerPosition: true,
            playerPositionX: this.destinationPosition.x,
            playerPositionY: this.destinationPosition.y
          }
        );
      }
    }
    else {
      this.displayPopup = false;
    }
    this.draw(Layer1, HUDLayer);
  }
  draw(Layer1, HUDLayer) {
    Layer1.drawImage(this.sprite, this.rectShape.x, this.rectShape.y, this.sprite.width, this.sprite.height);
    if (this.displayPopup) {
      HUDLayer.font = '25px Georgia';
      HUDLayer.drawImage(this.popup, 225, 20, 520, 150);
      const text = 'Chcesz przenieś się do: ' + this.destinationLevelName + '?';
      const xPos = (520 - HUDLayer.measureText(text).width) / 2 + 225;
      HUDLayer.fillStyle = 'white';
      HUDLayer.fillText(text, xPos, 75);
      HUDLayer.fillText('<Spacja>', 440, 130);
    }
  }
}

/* harmony default export */ var framework_Teleport = (Teleport_Teleport);

// CONCATENATED MODULE: ./src/framework/Level.js













class Level_Level {
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
          const item = new framework_Item(this.pickableItems[i].itemData);
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
      const rand = randomNumber_randomNumber(1000) + 1;
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
    const rand = randomNumber_randomNumber(this.monsters.length);
    const monsterData = this.game.dataManager.getMonsterData(this.monsters[rand]);
    const encounter = new framework_Encounter(this.game, monsterData, 2, this.battleBackgrounds[randomNumber_randomNumber(1)]);
    this.game.sceneManager.changeCurrentScene('fightIntroScene', encounter, true);
  }
  generatePickableItem() {
    const pickableItems = [];
    for (let i = 0; i < 5; i++) {
      const itemData = this.game.dataManager.getItemData('pickableItems', 1);
      pickableItems.push(new framework_PickableItem(randomNumber_randomNumber(this.width), randomNumber_randomNumber(this.height), 45, 65, itemData));
    }
    return pickableItems;
  }
  createShrine(shrineData) {
    if (shrineData) {
      return new framework_Shrine(this.game, shrineData.x, shrineData.y);
    }
    else {
      return null;
    }
  }
  createChests(chestsData) {
    const chests = [];
    chestsData.forEach((chest) => chests.push(
      new framework_Chest(this.game, chest.x, chest.y, chest.spriteSrc, chest.openingCodeLength)
    ));
    return chests;
  }
  createTeleports(teleportsData) {
    const teleports = [];
    teleportsData.forEach((teleport) => teleports.push(
      new framework_Teleport(
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
      new framework_Npc(
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

/* harmony default export */ var framework_Level = (Level_Level);

// CONCATENATED MODULE: ./src/gameScenes/secondLevel.js


const levelData = {
  name: 'Wioska',
  spriteSrc: 'img/levels/level02.png',
  startPositionX: 1000,
  startPositionY: 1700,
  width: 2000,
  height: 2000,
  npcsOnMap: [
    {
      spriteSrc: 'img/spritesheets/squire_m.png',
      x: 500,
      y: 700,
      isStatic: false,
      name: 'Bartek',
      questsIds: [0],
      isVendor: false
    },
    {
      spriteSrc: 'img/spritesheets/greek_m2.png',
      x: 500,
      y: 700,
      isStatic: false,
      name: 'Tomek',
      questsIds: null,
      isVendor: true
    }
  ],
  shrine: false,
  randomEncounterRate: 5,
  teleports: [
    {
      x: 600,
      y: 1850,
      destinationScene: 'startLevel',
      destinationLevelName: 'Droga do wioski',
      destinationX: 750,
      destinationY: 250,
    }
  ],
  chests: [],
  battleBackgrounds: ['img/battlegrounds/bg01.png'],
  monsters: ['spider']
};
const secondLevel = new framework_Level(levelData);

/* harmony default export */ var gameScenes_secondLevel = (secondLevel);

// CONCATENATED MODULE: ./src/gameScenes/shopScene.js




const shopScene = {
  init() {
    //this.returnButton = new Button(40, 610, 160, 80, 'img/btn_back.png'),
    this.shopItemsGrid = new framework_InventoryGrid(
      this.game,
      40,
      255,
      0,
      0,
      215,
      285,
      'img/shop_slots.png',
      {width: 64, height: 64, margin: 6, rowsNumber: 4, columnsNumber: 3}
    );
    this.alpha = 0;
    //this.generateVendorItems(2);
    this.addCanvasLayer('Layer1');
  },
  enter() {
  //  this.game.player.canMove = false;
    this.game.player.equipment.isOpen = true;
    this.game.player.canToggleWindow = false;
    this.addSignalListeners({click: this.onClick, doubleClick: this.onDoubleClick, mouseMove: this.onMouseMove});
  },
  exit() {
    this.removeSignalListeners();
    //this.game.player.canMove = true;
    this.game.player.equipment.isOpen = false;
    this.game.player.canToggleWindow = true;
    //this.game.stateManager.previousState.activeNpc.isActiv = false;
  },
  update({Layer1}) {
    this.alpha += 0.05;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
    this.draw(Layer1);
  },
  methods: {
    buyItem(item) {
      this.game.player.gold -= item.value;
      this.game.player.addItemToEq(item);
    },
    sellItem(item) {
      this.game.player.gold += item.value;
      this.game.player.removeItemFromEq(item);
    },
    draw(Layer1) {
      Layer1.globalAlpha = this.alpha;
      Layer1.save();
      Layer1.font = '45px Georgia';
      Layer1.fillStyle = 'rgb(249, 230, 54)';
      Layer1.strokeStyle = 'black';
      Layer1.strokeText('Twoje pieniądze: ' + this.game.player.gold, 50, 70);
      Layer1.fillText('Twoje pieniądze: ' + this.game.player.gold, 50, 70);
      Layer1.restore();
      this.shopItemsGrid.draw(Layer1);
      this.game.player.equipment.draw(Layer1);
      this.game.console.draw(Layer1);
      Layer1.drawImage(this.returnButton.sprite, this.returnButton.x, this.returnButton.y);
    },
    generateVendorItems() {

      // health potions
      let itemData = this.game.dataManager.getItemData('potion', 1);
      this.shopItemsGrid.itemSlots[0].item = new Item(itemData);
      this.shopItemsGrid.itemSlots[0].stackAmount = randomNumber(5) + 3;

      // mana potions
      itemData = this.game.dataManager.getItemData('potion', 2);
      this.shopItemsGrid.itemSlots[1].item = new Item(itemData);
      this.shopItemsGrid.itemSlots[1].stackAmount = randomNumber(5) + 3;
    },
    onClick({x, y}) {
      if (pointInsideRectangle(x, y, this.returnButton)) {
        this.game.sceneManager.changeCurrentScene(this.game.sceneManager.previousScene.name);
      }
    },
    onDoubleClick({x, y}) {

      // check if double click was on player's item
      for (let i = 0; i < this.game.player.equipment.inventory.itemSlots.length; i++) {
        if (pointInsideRectangle(x, y, this.game.player.equipment.inventory.itemSlots[i])) {
          this.sellItem(i);
          break;
        }
      }

      // check if double click was on vendor's item
      for (let i = 0; i < this.shopItemsGrid.length; i++) {
        if (pointInsideRectangle(x, y, this.shopItemsGrid.itemSlots[i])) {
          this.buyItem(i);
          break;
        }
      }
    },
    onMouseMove({x, y}) {

      // check if mouse cursor hover some player's item
      this.game.player.equipment.onMouseMove({x, y});
      this.shopItemsGrid.hoveredItem = null;
      for (let i = 0; i < this.shopItemsGrid.itemSlots.length; i++) {
        if (pointInsideRectangle(x, y, this.shopItemsGrid.itemSlots[i])) {
          this.shopItemsGrid.hoveredItem = this.shopItemsGrid.itemSlots[i].item;
          break;
        }
      }
    }
  }
};

/* harmony default export */ var gameScenes_shopScene = (shopScene);

// CONCATENATED MODULE: ./src/gameScenes/startLevel.js


const startLevel_levelData = {
  name: 'Droga do wioski',
  spriteSrc: 'img/levels/level01.png',
  startPositionX: 600,
  startPositionY: 3500,
  width: 1200,
  height: 4000,
  npcsOnMap: [],
  shrine: false,
  randomEncounterRate: 5,
  teleports: [
    {
      x: 550,
      y: 50,
      destinationScene: 'secondLevel',
      destinationLevelName: 'Wioska',
      destinationX: 750,
      destinationY: 1850,
    }
  ],
  chests: [
    {
      x: 200,
      y: 2500,
      spriteSrc: 'img/skrzynia.png',
      openingCodeLength: 4
    }
  ],
  battleBackgrounds: ['img/battlegrounds/bg01.png'],
  monsters: ['spider']
};
const startLevel = new framework_Level(startLevel_levelData);

/* harmony default export */ var gameScenes_startLevel = (startLevel);

// CONCATENATED MODULE: ./src/index.js












const src_game = new framework_Game(960, 704);

// global reference to game for debugging purpose
window.game = src_game;

src_game.addScene('intro', gameScenes_introScene);
src_game.addScene('mainMenu', gameScenes_mainMenuScene);
src_game.addScene('chooseName', gameScenes_chooseNameScene);
src_game.addScene('chooseGender', gameScenes_chooseGenderScene);
src_game.addScene('startLevel', gameScenes_startLevel);
src_game.addScene('fightIntroScene', gameScenes_fightIntroScene);
src_game.addScene('fightScene', gameScenes_fightScene);
src_game.addScene('shopScene', gameScenes_shopScene);
src_game.addScene('openingChestScene', gameScenes_openingChestScene);
src_game.addScene('secondLevel', gameScenes_secondLevel);

// start initial scene
src_game.changeCurrentScene('mainMenu');


/***/ })
/******/ ]);