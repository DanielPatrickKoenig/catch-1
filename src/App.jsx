import './App.css';
import Game from './Game';
import ModalContent from './ModalContent'
import CatchGame from './class/CatchGame';
import { useState, useReducer } from 'react';
const game = new CatchGame();

const App = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const [pieces, setPieces] = useState(game.pieces);
  const [gameOver, setGameOver] = useState(false);
  const onGameUpdate = () => {
    setPieces(game.pieces);
    forceUpdate();
  }
  const replayHandler = () => {
    setGameOver(false);
    game.restartGame();
  }
  const onGameOver = (_game) => {
    setGameOver(true);
    // console.log('game over', _game.points);
  }
  game.updateHandler = onGameUpdate;
  game.gameOverHandler = onGameOver;
  return (
    <div className="content">
      
      <Game game={game} pieces={pieces} />
      <button onClick={() => {game.startGame()}}>StartGame</button>
      {gameOver && <ModalContent>
        <h2>Game Over</h2>
        <p>
          Your score was: {game.points}
        </p>
        <button onClick={replayHandler}>
          Play again
        </button>
      </ModalContent>}
    </div>
  );
};

export default App;
