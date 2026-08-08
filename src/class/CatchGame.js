export default class CatchGame {
    constructor () {
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
        this.addPiece();
        this.addPiece();
        this.addPiece();
    }
    addPiece () {
        const piece = {
            type: this.types[Math.floor(Math.random() * this.types.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
        }
        this.pieces.push(piece);
    }
}