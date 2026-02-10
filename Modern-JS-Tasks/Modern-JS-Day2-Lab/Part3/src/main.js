/*
4- Create an electric car object and experiment with calling ‘acceleracte ‘,’brake’ and 
‘chargeBattery’
(charge to 90%). Notice what happens when you ‘ accelerate 
DATA CAR 1 :’ Tesla’ going at 120 km/h , with a charge of 23%
*/

import { EV } from "../models/carElctricModule.js";
import { Car } from "../../Part2/models/carModule.js";

const ev1 = new EV("Tesla", 120, 23);

console.log(`Electric Car: Serial: ${ev1.Serial}, Name: ${ev1.Name}, Speed: ${ev1.Speed} km/h, Charge: ${ev1.Charge}%`);

ev1.accelerate();

console.log(`${ev1.Name} going at ${ev1.Speed} km/h, with a charge of ${ev1.Charge}%`);

ev1.chargeBattery(90);
console.log(`New Charge: ${ev1.Charge}%`);

console.log(`Total number of cars created: ${Car.objCountCar}`);
