// 1- Create Shape Base Abstract Class which contains color property as private with set and get,PrintColor and CalcArea and Calcperimeter methods which will return Zero in Shape Base.

export class ShapeBase {
    #color;
    constructor(color) {
        if (this.constructor.name === "ShapeBase") {
            throw new Error("Cannot instantiate abstract class ShapeBase.");
        }
        this.#color = color;
    }
    set PrintColor(color) {
        this.#color = color;
    }
    get PrintColor() {
        return `Shape color: ${this.#color}`;
    }
    CalcArea() {
        return 0;
    }
    CalcPerimeter() {
        return 0;
    }
}