/*
Create 2 car objects and experiment with calling ‘accelerate’ and ‘brake’ multiple times on each of them.
DATA Car1 : ‘BMW’ going at 120 km/h
DATA CARA2: ‘Mercedes’ going at 95 km/h
car count
*/

import { Car } from "../models/carModule.js";

const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();

console.log(`Car: Serial: ${car1.Serial}, Name: ${car1.Name}, Speed: ${car1.Speed} km/h`);
console.log(`Car: Serial: ${car2.Serial}, Name: ${car2.Name}, Speed: ${car2.Speed} km/h`);

console.log(`Total number of cars created: ${Car.objCountCar}`);

