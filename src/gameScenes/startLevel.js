import Level from '../framework/Level.js';

const levelData = {
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
const startLevel = new Level(levelData);

export default startLevel;
