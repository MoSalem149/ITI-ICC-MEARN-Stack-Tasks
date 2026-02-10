/*
1- Define an array of numbers (only let is allowed)
-Sort them ascending then descending (using array sort method and Arrow 
functions)
-Filter numbers larger than 50 (using array filter method and Arrow functions)
-Display Max and Min Numbers (using math methods and spread operator)
*/

// 1- Define an array of numbers (only let is allowed)
let numArr = [34, 67, 23, 89, 12, 90, 45, 78, 56, 11];

// Sort ascending
let ascArr = numArr.slice().sort((a, b) => a - b);
console.log("Ascending:", ascArr);

// Sort descending
let desArr = numArr.slice().sort((a, b) => b - a);
console.log("Descending:", ascArr);

// Filter Numbers Larger Than 50
let numLargerThan50 = numArr.filter(num => num > 50);
console.log("Numbers larger than 50:", numLargerThan50);

// Display Max and Min Numbers
let maxNum = Math.max(...numArr);
let minNum = Math.min(...numArr);
console.log(`Max Number: ${maxNum}, Min Number: ${minNum}`);
