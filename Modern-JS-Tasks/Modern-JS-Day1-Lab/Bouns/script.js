/*
create static class that i apply that operation on it use and take array and valdatit it i want to implement something like Math.max()  Math.min()
to be Math.sum()  Math.mul()  Math.sub()  Math.div()
*/

// i want the valdation to be outside the Math class
// apply the

function Math() {}

let result;

Math.sum = function (...numbers) {
  if (numbers.length === 0) {
    result = 0;
    console.log(result);
    return;
  } else {
    result = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(result);
  }
};

Math.mul = function (...numbers) {
  if (numbers.length === 0) {
    result = 0;
    console.log(result);
    return;
  } else {
    result = numbers.reduce((acc, curr) => acc * curr);
    console.log(result);
  }
};

Math.sub = function (...numbers) {
  if (numbers === -numbers) {
    result = 0;
    console.log(result);
    return;
  } else {
    result = numbers.reduce((acc, curr) => acc - curr);
    console.log(result);
  }
};

Math.div = function (...numbers) {
  if (numbers.includes(0)) {
    console.log("Error: Division by zero is not allowed.");
    return;
  } else {
    result = numbers.reduce((acc, curr) => acc / curr);
    console.log(result);
  }
};

Math.sum();
Math.mul(3, 1, 6, 3);
Math.sub(10, -2, 1);
Math.div(20, 0, 2);
