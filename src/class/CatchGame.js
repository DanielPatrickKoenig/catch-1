import Catchable from "./Catchable";
import ScoreGraphic from "./ScoreGraphic";
import jstrig from "jstrig";
import gameConfig from '../config/game.json';
export default class CatchGame {
    constructor () {
        this.playing = false;
        this.baseSpawnTime = gameConfig.baseSpawnTime;
        this.spawnRange = gameConfig.spawnRange;
        this.types = gameConfig.types;
        this.pieces = [];
        this.updateHandler = null;
        this.gameOverHandler = null;
        this.heroPosition = { x: 50, y: 50 };
        this.points = 0;
        this.scoreGraphics = [];
    }
    addPiece () {
        const piece = new Catchable({
            type: this.types[Math.floor(Math.random() * this.types.length)],
            x: Math.random() * 100,
            y: gameConfig.catchable.startY,
            updateHandler: (item) => {
                this.checkForCollisions(item);
                this.updateHandler(this);
            },
            completeHandler: (item) => this.removePiece(item.id),
        });
        this.pieces.push(piece);
        if (this.updateHandler) this.updateHandler(this);
    }
    addScoreGraphic (piece) {
        const scoreGraphic = new ScoreGraphic({
            catchable: piece,
            updateHandler: () => {
                this.updateHandler(this);
            },
            completeHandler: (item) => this.removeScoreGraphic(item.id),
        });

        this.scoreGraphics.push(scoreGraphic);

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
    removeScoreGraphic (id) {
        this.scoreGraphics = this.scoreGraphics.filter(item => item.id !== id);
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
            if (!piece.redeemed) {
                this.points += piece.type.value;
                piece.redeemed = true;
                this.checkGameStatus(piece);
                this.addScoreGraphic(piece);
            }
            this.removePiece(piece.id);
        }
    }
    async checkGameStatus (piece) {
        if (piece.type.gameEvent === 'gameOver') {
            this.playing = false;
            if (this.gameOverHandler) this.gameOverHandler(this);
            await new Promise(resolve => setTimeout(resolve, 3000));
        }
    }
    restartGame () {
        this.pieces = [];
        this.points = 0;
        this.startGame();
    }
}