import {
  defaultFightStatistics,
  defaultInventoryItems,
  defaultEquippedItems
} from './data/defaultPlayerData.js';
import Player from './Player.js';

export default function createPlayer(game, data) {
  data.gold = data.gold || 100;
  data.exp = data.exp || 0;
  data.level = data.level || 1;
  data.fightStatistics = data.fightStatistics || defaultFightStatistics;
  data.inventoryItems = data.inventoryItems || [];
  data.equippedItems = data.equippedItems || [];
  return new Player(game, data);
}
