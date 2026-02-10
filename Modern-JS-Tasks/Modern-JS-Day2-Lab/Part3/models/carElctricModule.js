/*
Part Three:
1-Create Electric Car (Called EV) as a CHILD “class” of Car Besides a Name and Current 
Speed ,the EV also has the Current battery charge in % (‘charge’ property )
2-Implement a ‘chargeBattery’ method which takes an arguments ‘chargeTo’ and sets the 
battery charge to this value;
3-Implment an ‘accelerate’ method that will increase the car’s speed by 20, and decrease 
the charge by 1% ,then log a message like this :
‘Tesla going at 149 km/h, with a charge of 22%’;
*/

import { Car } from "../../Part2/models/carModule.js";

export class EV extends Car {
    #charge;

    constructor(name, speed, charge) {
        super(name, speed);
        this.#charge = charge;
        Car.objCountCar++;
    }
    set Charge(charge) {
        this.#charge = charge;
    }
    get Charge() {
        return this.#charge;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
    }
    accelerate() {
        this.Speed += 20; 
        this.#charge -= 1;
    }
}
