const Server = require('boardgame.io/server').Server;
const TicTacToe = require('./game').TicTacToe;
console.log(TicTacToe)
const server = Server({ 
    games: [TicTacToe] 
});
server.run(8000);