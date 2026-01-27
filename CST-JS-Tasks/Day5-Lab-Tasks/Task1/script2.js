/*
2- Write a JavaScript function to Compute the sum and product of an array of integers  (Use eval)  
    a- Function header as => function sumAll(numbersArray) Note: using eval , function input is an array and function call will be as follow sumAll([3,1,4,5,2]); 
    b- Function header as  => function sumAll() Note: using eval and arguments array-like object
*/

console.log('--- Compute Sum and Product of an Array of Integers ---');

function sumAll(numbersArr) {
    var sumRes = eval(numbersArr.join('+'));
    var prodRes = eval(numbersArr.join('*'));
    console.log("Sum is:", sumRes);
    console.log("Product is:", prodRes);
}
sumAll([3, 1, 4, 5, 2]);

console.log('--- Using arguments array-like object ---');

function sumAllArgs() {
    var argsArr = Array.from(arguments);
    var sumRes = eval(argsArr.join('+'));
    var prodRes = eval(argsArr.join('*'));
    console.log("Sum is:", sumRes);
    console.log("Product is:", prodRes);
}
sumAllArgs(3, 1, 4, 5, 2);


