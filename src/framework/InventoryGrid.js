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

export default InventoryGrid;
