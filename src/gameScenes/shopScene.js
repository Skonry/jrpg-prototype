import Button from '../framework/guiElements/Button.js';
import InventoryGrid from '../framework/InventoryGrid.js';
import pointInsideRectangle from '../framework/utils/pointInsideRectangle.js';

const shopScene = {
  init() {
    //this.returnButton = new Button(40, 610, 160, 80, 'img/btn_back.png'),
    this.shopItemsGrid = new InventoryGrid(
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

export default shopScene;
