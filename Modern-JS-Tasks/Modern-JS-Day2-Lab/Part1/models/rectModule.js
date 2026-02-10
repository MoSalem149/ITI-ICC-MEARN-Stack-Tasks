// 2- Create Rectangle Class Which inherits from Shape Abstract Class define Width and Height Properties for Rect Class as private with set and get Not with zero or minus value print validation message to user

import { ShapeBase } from "./shapeBaseModule.js";

export class Rect extends ShapeBase {
    #width;
    #height;
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
        if (this.constructor.name === "Rect") {
            Rect.objCountRect = (Rect.objCountRect || 0) + 1;
        }
    }
    set width(value) {
        if (value > 0) {
            this.#width = value;
        } else {
            console.log("Width must be a positive.");
        }
    }
    get width() {
        return this.#width;
    }
    set height(value) {
        if (value > 0) {
            this.#height = value;
        } else {
            console.log("Height must be a positive.");
        }
    }
    get height() {
        return this.#height;
    }
    CalcArea() {
        return this.#width * this.#height;
    }
    CalcPerimeter() {
        return 2 * (this.#width + this.#height);
    }
    toString() {
        return `${this.PrintColor}, Area: ${this.CalcArea()}, Perimeter: ${this.CalcPerimeter()}`;
    }
}

