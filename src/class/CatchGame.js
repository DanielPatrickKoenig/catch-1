import Catchable from "./Catchable";
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
    }
    addPiece () {
        const piece = new Catchable({
            type: this.types[Math.floor(Math.random() * this.types.length)],
            x: Math.random() * 100,
            y: -10,
            updateHandler: () => this.updateHandler(this),
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
    stopGame () {
        this.playing = false;
    }
}