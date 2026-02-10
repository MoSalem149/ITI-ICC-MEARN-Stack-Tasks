// 4-create Circle Class with private fields (radius and x,y ) with set and get properies -Circle class inherit from Shape class with override toString

import { ShapeBase } from "./shapeBaseModule.js";

export class Circle extends ShapeBase {
    #radius;
    #x;
    #y;
    constructor(color, radius, x, y) {
        super(color);
        this.radius = radius;
        this.x = x;
        this.y = y;
        Circle.objCountCircle = (Circle.objCountCircle || 0) + 1;
    }
    set radius(value) {
        if (value > 0) {
            this.#radius = value;
        } else {
            console.log("Radius must be a positive.");
        }
    }
    get radius() {
        return this.#radius;
    }
    set x(value) {
        this.#x = value;
    }
    get x() {
        return this.#x;
    }
    set y(value) {
        this.#y = value;
    }
    get y() {
        return this.#y;
    }
    CalcArea() {
        return Math.PI * this.#radius * this.#radius;
    }
    CalcPerimeter() {
        return 2 * Math.PI * this.#radius;
    }
    toString() {
        return `${this.PrintColor}, Radius: ${this.#radius}, Center: (${this.#x}, ${this.#y})`;
    }
}