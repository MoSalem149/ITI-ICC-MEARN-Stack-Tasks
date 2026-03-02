// TODO
// ? Create a counter class that has counter value - number.
//! Class
class Counter {
    //! Prop
    private counterValue: number;

    //! Constructor
    constructor(counterValue: number) {
        this.counterValue = counterValue;
    }

    // TODO
    //? Counter Class contains 3 functions one to increase the counter value , one to decrease the counter value and the last one to reset counter value.
    //! Methods
    increase(): number {
        this.counterValue += 1;
        return this.counterValue;
    } //* Done

    decrease(): number {
        return this.counterValue = Math.max(0, this.counterValue - 1);
    } //* Done

    reset(): number {
        return this.counterValue = 0;
    } //* Done

} //* Done

// TODO
//? Create a new instance from Counter class and use the class inner functions to change the counter value.
//! Instance
const counter = new Counter(0); //* Done

// TODO
//? Append the the counter value to the html.
//! Selectors
const displayCount = document.querySelector("#counter-display");
const decBtn = document.querySelector("#decrease-btn");
const resBtn = document.querySelector("#reset-btn");
const incBtn = document.querySelector("#increase-btn");
//* Done

//! Listeners
decBtn?.addEventListener("click", () => {
  displayCount!.textContent = counter.decrease().toString();
}); //* Done

resBtn?.addEventListener("click", () => {
  displayCount!.textContent = counter.reset().toString();
}); //* Done

incBtn?.addEventListener("click", () => {
  displayCount!.textContent = counter.increase().toString();
}); //* Done
