/*
PartOne:
1- Using Constructor function to create Shape Base Abstract Class which contains color property And PrintColor method and CalcArea and Calcperimeter which will return Zero in Shape Base Class Define them on Shape prototype object (Using Prototype)
2- Define Rect Class Which inherits from Shape Abstract Class Using Prototype inheritance) Define Width and Height Properties for Rect Class 
3- Define Square Class Which inherits from Rect Class - override CalcArea, calcperimeter, printColor, toString which will display color, area and perimeter in rect and square classes - create array object which will contains set of objects from rect and square classes then display it’s areas 
4- Define static property and static method like following case for Rect and Square classes to get number of objects created from rect and square Types
*/

// 1- Using Constructor function to create Shape Base Abstract Class which contains color property And PrintColor method and CalcArea and Calcperimeter which will return Zero in Shape Base Class Define them on Shape prototype object (Using Prototype)
function ShapeBase(color) {
    this.color = color;
}

ShapeBase.prototype.PrintColor = function() {
    return `Shape color: ${this.color}`;
}

ShapeBase.prototype.CalcArea = function() {
    return 0;
}

ShapeBase.prototype.CalcPerimeter = function() {
    return 0;
}

// 2- Define Rect Class Which inherits from Shape Abstract Class Using Prototype inheritance) Define Width and Height Properties for Rect Class
function Rect(color, width, height) {
    ShapeBase.call(this, color);
    this.width = width;
    this.height = height;
    Rect.objCountRect++;
}

Rect.prototype = Object.create(ShapeBase.prototype);
Rect.prototype.constructor = Rect;

Rect.prototype.CalcArea = function() {
    return this.width * this.height;
}

Rect.prototype.CalcPerimeter = function() {
    return 2 * (this.width + this.height);
}

Rect.prototype.PrintColor = function() {
    return `Rectangle color: ${this.color}`;
}

// 3- Define Square Class Which inherits from Rect Class - override CalcArea, calcperimeter, printColor, toString which will display color, area and perimeter in rect and square classes - create array object which will contains set of objects from rect and square classes then display it’s areas

function Square(color, side) {
    Rect.call(this, color, side);
    Square.objCountSquare++;
}

Square.prototype = Object.create(Rect.prototype);
Square.prototype.constructor = Square;

Square.prototype.CalcArea = function() {
    return this.width * this.width;
}

Square.prototype.CalcPerimeter = function() {
    return 4 * this.width;
}

Square.prototype.PrintColor = function() {
    return `Square color: ${this.color}`;
}

Square.prototype.toString = function() {
    return `Square - color: ${this.color}, area: ${this.CalcArea()}, perimeter: ${this.CalcPerimeter()}`;
}

// 4- Define static property and static method like following case for Rect and Square classes to get number of objects created from rect and square Types
Rect.objCountRect = 0;
Rect.getObjectCountRect = function() {
    return Rect.objCountRect;
}

Square.objCountSquare = 0;
Square.getObjectCountSquare = function() {
    return Square.objCountSquare;
}

var shapeObjArr = [
    new Rect("Red", 4, 5),
    new Square("Blue", 6),
]

console.log(`Num of Rect Obj: ${Rect.getObjectCountRect()}`);
console.log(`Num of Square Obj: ${Square.getObjectCountSquare()}`);

shapeObjArr.forEach(shape => {
    console.log(`Shape Area: ${shape.CalcArea()}`);
});

console.log("-------------------------");

shapeObjArr.forEach(shape => {
    console.log(`Shape Perimeter: ${shape.CalcPerimeter()}`);
});

console.log("-------------------------");

shapeObjArr.forEach(shape => {
    console.log(shape.PrintColor());
});

console.log("-------------------------");

shapeObjArr.forEach(shape => {
    console.log(`Shape String: ${shape.toString()}`);
});

console.log("-------------------------");

// var rect1 = new Rect('red',10,20);
// var rect1 = new Rect('red',10,20);
// var rect1 = new Rect('red',10,20);
// var rect1 = new Rect('red',10,20);
// var rect1 = new Rect('red',10,20);

// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);
// var square1= new Square('green',10,10);

console.log("--Test--");

console.log(ShapeBase);
console.log(new ShapeBase("Green"));

console.log("-------------------------");

console.log(Rect);
// console.log(new Rect("Red", 4, 5),);

console.log("-------------------------");

console.log(Square);
// console.log(new Square("Blue", 6));

console.log("-------------------------");

// console.log(ShapeBase.prototype);
// console.log(Rect.prototype);
// console.log(Square.prototype);

