import chooseGenderScene from './gameScenes/chooseGenderScene.js';
import chooseNameScene from './gameScenes/chooseNameScene.js';
import fightScene from './gameScenes/fightScene.js';
import fightIntroScene from './gameScenes/fightIntroScene.js';
import Game from './framework/Game.js';
import introScene from './gameScenes/introScene.js';
import mainMenuScene from './gameScenes/mainMenuScene.js';
import openingChestScene from './gameScenes/openingChestScene.js';
import secondLevel from './gameScenes/secondLevel.js';
import shopScene from './gameScenes/shopScene.js';
import startLevel from './gameScenes/startLevel.js';

const game = new Game(960, 704);

// global reference to game for debugging purpose
window.game = game;

game.addScene('intro', introScene);
game.addScene('mainMenu', mainMenuScene);
game.addScene('chooseName', chooseNameScene);
game.addScene('chooseGender', chooseGenderScene);
game.addScene('startLevel', startLevel);
game.addScene('fightIntroScene', fightIntroScene);
game.addScene('fightScene', fightScene);
game.addScene('shopScene', shopScene);
game.addScene('openingChestScene', openingChestScene);
game.addScene('secondLevel', secondLevel);

// start initial scene
game.changeCurrentScene('mainMenu');
