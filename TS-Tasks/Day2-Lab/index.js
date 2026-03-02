// TODO
// ? Create a counter class that has counter value - number.
//! Class
var Counter = /** @class */ (function () {
  //! Constructor
  function Counter(counterValue) {
    this.counterValue = counterValue;
  }
  // TODO
  //? Counter Class contains 3 functions one to increase the counter value , one to decrease the counter value and the last one to reset counter value.
  //! Methods
  Counter.prototype.increase = function () {
    this.counterValue += 1;
    return this.counterValue;
  }; //* Done
  Counter.prototype.decrease = function () {
    return (this.counterValue = Math.max(0, this.counterValue - 1));
  }; //* Done
  Counter.prototype.reset = function () {
    return (this.counterValue = 0);
  }; //* Done
  return Counter;
})(); //* Done
// TODO
//? Create a new instance from Counter class and use the class inner functions to change the counter value.
//! Instance
var counter = new Counter(0); //* Done
// TODO
//? Append the the counter value to the html.
//! Selectors
var displayCount = document.querySelector("#counter-display");
var decBtn = document.querySelector("#decrease-btn");
var resBtn = document.querySelector("#reset-btn");
var incBtn = document.querySelector("#increase-btn");
//* Done
//! Listeners
decBtn === null || decBtn === void 0
  ? void 0
  : decBtn.addEventListener("click", function () {
      displayCount.textContent = counter.decrease().toString();
    }); //* Done
resBtn === null || resBtn === void 0
  ? void 0
  : resBtn.addEventListener("click", function () {
      displayCount.textContent = counter.reset().toString();
    }); //* Done
incBtn === null || incBtn === void 0
  ? void 0
  : incBtn.addEventListener("click", function () {
      displayCount.textContent = counter.increase().toString();
    }); //* Done
