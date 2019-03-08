class Item {
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

export default Item;
