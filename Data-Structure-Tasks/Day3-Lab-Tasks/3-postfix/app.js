let expr = [1, 2, 3, 4, "+", "*", "+", 5, "-"];

for (let t of expr) {
  if (typeof t === "number") {
    stack.push(t);
  } else {
    let b = stack.pop();
    let a = stack.pop();
    stack.push(t === "+" ? a + b : t === "-" ? a - b : a * b);
  }
}

console.log(stack.pop()); // 10
