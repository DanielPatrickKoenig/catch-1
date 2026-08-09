import { generateUUID } from "../utils";
import gsap from "gsap";
export default class Catchable {
    constructor ({ x, y, type, updateHandler }) {
        this.id = generateUUID();
        this.x = x;
        this.y = y;
        this.type = type;
        this.baseDuration = 5;
        this.durationRange = 3;
        this.updateHandler = updateHandler;
        this.move();
    }
    move () {
        gsap.to(this, {
            y: 110,
            duration: (Math.random() * this.durationRange) + this.baseDuration,
            onUpdate: () => this.updateHandler(this),
        });
    }
}