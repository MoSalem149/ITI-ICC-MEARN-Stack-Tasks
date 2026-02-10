// create array of Shapes which will contains set of objects from rect and square classes then display it’s areas

import { Rect } from "../models/rectModule.js";
import { Square } from "../models/squareModule.js";
import { Circle } from "../models/circleModule.js";

let shapes = [];

shapes.push(new Rect("Red", 10, 5));
shapes.push(new Square("Blue", 4));
shapes.push(new Circle("Green", 7, 0, 0));

shapes.forEach((shape) => {
    console.log(`Shape Type: ${shape.constructor.name}`);
    console.log(shape.PrintColor);
    console.log(`Area: ${shape.CalcArea()}`);
    console.log(`Perimeter: ${shape.CalcPerimeter()}`);
    console.log(`Shape String: ${shape.toString()}`);
    console.log("---------------------------");
});

console.log(`Total Rectangles: ${Rect.objCountRect || 0}`);
console.log(`Total Squares: ${Square.objCountSquare || 0}`);
console.log(`Total Circles: ${Circle.objCountCircle || 0}`);

