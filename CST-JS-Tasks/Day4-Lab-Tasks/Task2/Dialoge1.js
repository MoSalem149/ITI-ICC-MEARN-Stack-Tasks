// Receive from user 2 values using dialoge methods then print them as string or sum them if we can convert these values
var value1 = prompt("Enter first value:");
var value2 = prompt("Enter second value:");

var num1 = new Number(value1);
var num2 = new Number(value2);

+num1.toPrecision(value1);
+num2.toPrecision(value2);

console.log(num1);
console.log(num2);

console.log(num1 + num2);
