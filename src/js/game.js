class Game {
  start() {
    console.log('game started');
  }
}

const gameDefault = new Game();
const defaultCharacter = require('./domain').defaultCharacter;

class GameSavingData {
}
 
function readGameSaving() {
}
  
function writeGameSaving() {
}

module.exports = {
  gameDefault,
  GameSavingData,
  readGameSaving,
  writeGameSaving
};