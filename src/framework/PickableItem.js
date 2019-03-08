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

export default PickableItem;
