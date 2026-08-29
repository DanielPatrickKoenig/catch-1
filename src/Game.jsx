import './Game.css';
import Hero from './Hero';
import { useState, useRef } from 'react';
import FallingObject from './FallingObject';
import ScoreAnimation from './ScoreAnimation';
import { processPointerEvent } from './utils';
import gameConfig from './config/game.json';

const Game = (props) => {
    const [heroPosition, setHeroPosition] = useState({
        x: 50,
        y: 50,
    });
    const gameRef = useRef(null);
    const moveHandler = (e) => {
        const point = processPointerEvent(e);
        const bounds = gameRef.current.getBoundingClientRect();
        setHeroPosition({
            x: ((point.x - bounds.left) / bounds.width) * 100,
            y: ((point.y / bounds.height) * 100) + gameConfig.cursorOffset,
        });
        props.game.setHeroPosition(heroPosition);
    }
    return (
        <div
            ref={gameRef}
            className="game"
            onMouseMove={moveHandler}
            onTouchMove={moveHandler}
        >
            <label>
                Points: {props.game.points}
            </label>
            <Hero
                x={heroPosition.x}
                y={heroPosition.y}
            >
                <p>Hello</p>
            </Hero>
            {props.game.pieces.map(item => (<FallingObject x={item.x} y={item.y} type={item.type.type}>{item.type.type}</FallingObject>))}

            {props.game.scoreGraphics.map(item => (<ScoreAnimation x={item.x} y={item.y} points={item.type.value} />))}
        </div>
    );
};

export default Game;
