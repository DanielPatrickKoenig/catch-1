import './Game.css';
import Hero from './Hero';
import { useState } from 'react';

const Game = () => {
    const [heroPosition, setHeroPosition] = useState({
        x: 50,
        y: 50,
    });
    return (
        <div
            className="game"
        >
            <Hero
                x={heroPosition.x}
                y={heroPosition.y}
            >
                <p>Hello</p>
            </Hero>
        </div>
    );
};

export default Game;
