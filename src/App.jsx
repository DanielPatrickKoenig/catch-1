import './App.css';
import Game from './Game';
import CatchGame from './class/CatchGame';
import { useState, useReducer } from 'react';
const game = new CatchGame();

const App = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [pieces, setPieces] = useState(game.pieces);
  const onGameUpdate = () => {
    setPieces(game.pieces);
    forceUpdate();
  }
  const onGameOver = (_game) => {
    console.log('game over', _game.points);
  }
  game.updateHandler = onGameUpdate;
  game.gameOverHandler = onGameOver;
  return (
    <div className="content">
      
      <Game game={game} pieces={pieces} />
      <button onClick={() => {game.startGame()}}>StartGame</button>
    </div>
  );
};

export default App;
