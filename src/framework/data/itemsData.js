export const weapons = [
  {
    id: 1, name: 'Tasak', type: 'weapon', spriteSrc: 'img/items/tasak.png', requirements: {strenght: 15},
    value: 100, stackable: false, possibleToSell: true, bonus: 35
  }
];

export const shields = [
  {
    id: 1, name: 'Mała Tarcza',type: 'shield', spriteSrc: 'img/items/tarcza.png', requirements: {strenght: 10},
    value: 50, stackable: false, possibleToSell: true, bonus: 15
  }
];

export const helms = [

];

export const boots = [
  {
    id: 1, name:'Skórzane Buty', type: 'boots', spriteSrc: 'img/items/buty.png', requirements: {strenght: 5},
    value: 20, stackable: false, possibleToSell: true, bonus: 5
  }
];

export const armors = [

];

export const potions = [
  {
    id: 1, name: 'Dziki Sad', type: 'potion_health', spriteSrc: 'img/items/health_potion.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 50
  },
  {
    id: 2, name: 'Kompot z Jaszczura', type: 'potion_mana', spriteSrc: 'img/items/mana_potion.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 20
  }
];

export const lockpicks = [
  {
    id: 1, name: 'Wytrych', type: 'lockpick', spriteSrc: 'img/lockpick.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 0
  }
];

export const questItems = [
  {
    id: 1, name: 'Notatka', type: 'note', spriteSrc: 'img/note.png', requirements: {},
    value: 0, stackable: false, possibleToSell: false, bonus: 0
  },
];

export const pickableItems = [
  {
    id: 1, name: 'Kwiatek', type: 'pickable', spriteSrc: 'img/items/kwiatek.png', requirements: {},
    value: 10, stackable: true, possibleToSell: true, bonus: 0
  }
];
