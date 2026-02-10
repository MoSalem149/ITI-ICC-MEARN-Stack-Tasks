/*
2- Define javascript function that takes only 2 arguments operator and any 
numbers of integers (using Rest operator) then display the result of operation on 
console on one line (using substitution $ with bactecks ` ) as follow
“result of sum operation for 3,1,6,3 is 13”
*/
function calc(operator, ...numbers) {
  let result;
  if (numbers.length === 0) {
    result = 0;
    console.log(`result operation for ${numbers.join(",")} is ${result}`);
  } else {
    switch (operator) {
      case "sum":
        if (numbers.length === 0) {
          result = 0;
          console.log(
            `result of sum operation for ${numbers.join(",")} is ${result}`,
          );
        } else {
          result = numbers.reduce((acc, curr) => acc + curr, 0);
          console.log(
            `result of sum operation for ${numbers.join(",")} is ${result}`,
          );
        }
        break;
      case "mul":
        if (numbers.length === 0) {
          result = 0;
          console.log(
            `result of mul operation for ${numbers.join(",")} is ${result}`,
          );
        } else {
          result = numbers.reduce((acc, curr) => acc * curr, 1);
          console.log(
            `result of mul operation for ${numbers.join(",")} is ${result}`,
          );
        }
        break;
      case "sub":
        if (numbers.length === 0) {
          result = 0;
          console.log(
            `result of sub operation for ${numbers.join(",")} is ${result}`,
          );
        } else {
          result = numbers.reduce((acc, curr) => acc - curr);
          console.log(
            `result of sub operation for ${numbers.join(",")} is ${result}`,
          );
        }
        break;
      case "div":
        if (numbers.length === 0) {
          result = 0;
          console.log(
            `result of div operation for ${numbers.join(",")} is ${result}`,
          );
        } else {
          result = numbers.reduce((acc, curr) => acc / curr);
          console.log(
            `result of div operation for ${numbers.join(",")} is ${result}`,
          );
        }
        break;
      default:
        console.log("Invalid operator");
    }
  }
}

// Test cases 1
calc("sum", 3, 1, 6, 3);
calc("mul", 3, 1, 6, 3);
calc("sub", 10, 2, 1);
calc("div", 100, 2, 5);

// Test cases 2
calc("sum");
calc("mul");
calc("sub");
calc("div");
