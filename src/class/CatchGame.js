import Catchable from "./Catchable";
import jstrig from "jstrig";
export default class CatchGame {
    constructor () {
        this.playing = false;
        this.baseSpawnTime = 1000;
        this.spawnRange = 2000;
        this.types = [
            {
                type: 'a',
                value: 1,
            },
            {
                type: 'b',
                value: -1,
            },
            {
                type: 'c',
                value: 0,
                gameEvent: 'gameOver',
            },
        ];
        this.pieces = [];
        this.updateHandler = null;
        this.heroPosition = { x: 50, y: 50 };
    }
    addPiece () {
        const piece = new Catchable({
            type: this.types[Math.floor(Math.random() * this.types.length)],
            x: Math.random() * 100,
            y: -10,
            updateHandler: (item) => {
                this.checkForCollisions(item);
                this.updateHandler(this);
            },
            completeHandler: (item) => this.removePiece(item.id),
        });
        this.pieces.push(piece);
        if (this.updateHandler) this.updateHandler(this);
    }
    async startGame () {
        this.playing = true;
        while (this.playing) {
            await new Promise(resolve => setTimeout(resolve, (Math.random() * this.spawnRange) + this.baseSpawnTime));
            this.addPiece();
        }
    }
    removePiece (id) {
        this.pieces = this.pieces.filter(item => item.id !== id);
        if (this.updateHandler) this.updateHandler(this);
    }
    stopGame () {
        this.playing = false;
    }
    setHeroPosition (position) {
        this.heroPosition = position;
    }
    checkForCollisions(piece) {
        if (jstrig.distance(this.heroPosition, piece) < 5) {
            this.removePiece(piece.id);
        }
    }
}