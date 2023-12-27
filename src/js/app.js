const game = new Game();
game.start();

const {gameDefault, GameSavingData, loadGame: readGameSaving, saveGame: writeGameSaving} = require('./game');