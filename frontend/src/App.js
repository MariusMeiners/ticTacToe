import React from 'react';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import TicTacToeBoard from './TicTacToeBoard';


const TicTacToeClient = Client({ 
  game: TicTacToe, 
  board: TicTacToeBoard, 
  multiplayer: {local: true}
});

const App = () => (
  <div>
    <TicTacToeClient playerID="0" />
    <TicTacToeClient playerID="1" />
  </div>
);


export default App;