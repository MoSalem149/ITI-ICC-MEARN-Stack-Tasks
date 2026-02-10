/* Create A Car Class has a Serial ,Name and a Speed property As private . 
The SerialID for car create Unique random Number for each car 
The Speed property is the Current Speed of the Car in Km/h
2-Implement an ‘accelerate’ method will increase the car’s speed by 10,and log then new speed to console;
3-Implement a ‘brake’ method that will decrease the car’s speed by 5,and log the new speed to the console;
4-Implement a static member represent the number of create Car ,print the serial number of car and total number of it inside static 
*/

export class Car {
    #serial;
    #name;
    #speed;
    static objCountCar = 0;
    constructor(name, speed) {
        this.#serial = Math.floor(Math.random() * 100000);
        this.#name = name;
        this.#speed = speed;
        if (this.constructor.name === "Car") {
            Car.objCountCar = (Car.objCountCar || 0) + 1;
        }
    }
    get Serial() {
        return this.#serial;
    }
    set Name(name) {
        this.#name = name;
    }
    get Name() {
        return this.#name;
    }
    set Speed(speed) {
        this.#speed = speed;
    }
    get Speed() {
        return this.#speed;
    }
    accelerate() {
        this.#speed += 10;
    }
    brake() {
        this.#speed -= 5;
    }
}
