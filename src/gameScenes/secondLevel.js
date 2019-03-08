import Level from '../framework/Level.js';

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
const secondLevel = new Level(levelData);

export default secondLevel;
