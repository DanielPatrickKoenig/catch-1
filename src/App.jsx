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
  game.updateHandler = onGameUpdate;
  return (
    <div className="content">
      
      <Game game={game} pieces={pieces} />
      <button onClick={() => {game.addPiece()}}>Click</button>
    </div>
  );
};

export default App;
