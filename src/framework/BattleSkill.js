class BattleSkill {
  constructor(name, manaCost, sprite, description, index) {
    this.name = name;
    this.manaCost = manaCost;
    this.button = new Button(195 + 80 * index, 30, 70, 70, sprite);
    this.description = description;
  }
}

export default BattleSkill;
