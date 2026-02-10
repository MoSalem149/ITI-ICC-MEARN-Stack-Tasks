// 3- Creat Square Class Which inherits from Rect Class - override CalcArea , calcperimeter , printColor , toString which will display color , area and perimeter in rect and square classes

import { Rect } from "./rectModule.js";

export class Square extends Rect {
    constructor(color, side) {
        super(color);
        this.side = side;
        Square.objCountSquare = (Square.objCountSquare || 0) + 1;
    }
    CalcArea() {
        return this.side * this.side;
    }
    CalcPerimeter() {
        return 4 * this.side;
    }
    toString() {
        return `${this.PrintColor}, Area: ${this.CalcArea()}, Perimeter: ${this.CalcPerimeter()}`;
    }
}
//fuction
//