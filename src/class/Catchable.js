import { generateUUID } from "../utils";
export default class Catchable {
    constructor ({ x, y, type, updateHandler }) {
        this.id = generateUUID();
        this.x = x;
        this.y = y;
        this.type = type;
        this.updateHandler = updateHandler;
    }
}