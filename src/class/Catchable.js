import { generateUUID } from "../utils";
import gsap, { Linear } from "gsap";
export default class Catchable {
    constructor ({ x, y, type, updateHandler, completeHandler }) {
        this.id = generateUUID();
        this.x = x;
        this.y = y;
        this.type = type;
        this.baseDuration = 5;
        this.durationRange = 3;
        this.redeemed = false;
        this.updateHandler = updateHandler;
        this.completeHandler = completeHandler;
        this.move();
    }
    move () {
        gsap.to(this, {
            y: 110,
            duration: (Math.random() * this.durationRange) + this.baseDuration,
            onUpdate: () => this.updateHandler(this),
            onComplete: () => this.completeHandler ? this.completeHandler(this) : () => {},
            ease: Linear.easeInOut,
        });
    }
}