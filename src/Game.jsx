import './Game.css';
import Hero from './Hero';
import { useState, useRef } from 'react';

const Game = (props) => {
    const [heroPosition, setHeroPosition] = useState({
        x: 50,
        y: 50,
    });
    const gameRef = useRef(null);
    const moveHandler = (e) => {
        const bounds = gameRef.current.getBoundingClientRect();
        setHeroPosition({
            x: ((e.clientX - bounds.left) / bounds.width) * 100,
            y: (e.clientY / bounds.height) * 100,
        });
    }
    return (
        <div
            ref={gameRef}
            className="game"
            onMouseMove={moveHandler}
        >
            <Hero
                x={heroPosition.x}
                y={heroPosition.y}
            >
                <p>Hello</p>
            </Hero>
            {props.game.pieces.map(item => (<div>{item.type.type}</div>))}
        </div>
    );
};

export default Game;
