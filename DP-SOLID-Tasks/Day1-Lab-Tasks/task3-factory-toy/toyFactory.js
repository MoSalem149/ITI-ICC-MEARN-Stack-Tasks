//TODO
/*
3- In this problem, you need to implement a factory ToyFactory that can create a toy duck and a toy car object using either the ToyDuck or ToyCar function constructor.
A ToyDuck object should have the following properties:
	color
	price
	A ToyCar object should have the following properties:
	colors
	price
	name
*/

// ToyDuck Class
class ToyDuck {
  constructor(color, price) {
    // Props
    this.color = color;
    this.price = price;
  }
}

// ToyCar Class
class ToyCar {
  constructor(color, price, name) {
    // Props
    this.color = color;
    this.price = price;
    this.name = name;
  }
}

// ToyFactory Class with Factory Design Pattern
class ToyFactory {
  // Static Method
  static create(type, color, price, name) {
    switch (type) {
      case "duck":
        return new ToyDuck(color, price);
      case "car":
        return new ToyCar(color, price, name);
    }
  }
} //*DONE

//!TEST
const duck = ToyFactory.create("duck", "yellow", 100);
const car = ToyFactory.create("car", "red", 10000000, "ferrari");

//?RESULTS
console.log(duck);
console.log(car);

// هنا استخدمت ستاتك بدل ما كل شوية اقعد اعمل نيو لما اعمل انستانس جديدة
