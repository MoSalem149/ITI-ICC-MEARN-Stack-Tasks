/*
Part Three:
1-Use A constructor function to implement an Electric Car (Called EV) as a CHILD “class” of Car Besides a Name and Current Speed ,the EV also has the Current battery charge in % (‘charge’ property );
2-Implement a ‘chargeBattery’ method which takes an arguments ‘chargeTo’ and sets the battery charge to this value;
3-Implment an ‘accelerate’ method that will increase the car’s speed by 20, and decrease the charge by 1% ,then log a message like this :‘Tesla going at 149 km/h, with a charge of 22%’;
4- Create an electric car object and experiment with calling ‘acceleracte ‘,’brake’ and ‘chargeBattery’(charge to 90%). Notice what happens when you ‘ accelerate 
DATA CAR 1 :’ Tesla’ going at 120 km/h , with a charge of 23%
*/

// 1-Use A constructor function to implement an Electric Car (Called EV) as a CHILD “class” of Car Besides a Name and Current Speed ,the EV also has the Current battery charge in % (‘charge’ property );
function Car(name, speed) {
    this.name = name;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.name} speed is ${this.speed} km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    // console.log(`${this.name} speed is ${this.speed} km/h`);
}

function EV(name, speed, charge) {
    Car.call(this, name, speed);
    this.charge = charge;
}

EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;

// 2-Implement a ‘chargeBattery’ method which takes an arguments ‘chargeTo’ and sets the battery charge to this value;
EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
}

// 3-Implment an ‘accelerate’ method that will increase the car’s speed by 20, and decrease the charge by 1% ,then log a message like this :‘Tesla going at 149 km/h, with a charge of 22%’;
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.name} speed is ${this.speed} km/h, with a charge ${this.charge}%`);
}

var ev1 = new EV("Tesla", 129, 23);

// ev1.accelerate();
// ev1.brake();
// ev1.chargeBattery();

ev1.chargeBattery(90);
ev1.accelerate();
ev1.brake();