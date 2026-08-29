import gsap, { Linear } from "gsap";
import gameConfig from '../config/game.json';
export default class ScoreGraphic {
    constructor({ catchable, updateHandler, completeHandler }) {
        this.id = `score-${catchable.id}`;
        this.x = catchable.x;
        this.y = catchable.y;
        this.type = catchable.type;
        this.duration = gameConfig.scoreGraphic.duration;
        this.endY = this.y + gameConfig.scoreGraphic.endY;
        this.updateHandler = updateHandler;
        this.completeHandler = completeHandler;

        this.move();
    }

    move () {
        gsap.to(this, {
            y: this.endY,
            duration: this.duration,
            onUpdate: () => this.updateHandler(this),
            onComplete: () => this.completeHandler ? this.completeHandler(this) : () => {},
            ease: Linear.easeInOut,
        });
    }
}