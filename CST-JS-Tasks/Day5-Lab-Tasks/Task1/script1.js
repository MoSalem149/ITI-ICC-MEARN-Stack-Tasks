/* 
1- Define an array of numbers as numbers=[3,1,2,4,3,5,1]; 
- Write a JavaScript code to remove duplicate items from an array. 
- Sort them ascending 
- Filter numbers larger than 50   
    a- User defined function 
    b- Array built in filter function 
- Display Max and Min Numbers 
    a- User defined function 
    b- Math functions using es6 feature (BONUS)
*/

console.log('--- Define Array of Numbers ---');

var numbers = [3, 1, 2, 4, 3, 5, 1];
console.log(numbers);

console.log('--- Remove Duplicates ---');

var uniqueNumbers = numbers.filter(function(item, index, self){
    return self.indexOf(item) === index;
});
console.log("Unique Numbers:", uniqueNumbers);

console.log('--- Sort Ascending ---');

uniqueNumbers.sort(function(a, b){ return a - b; });
console.log("Sorted Numbers:", uniqueNumbers);

function filterLargerThan50(uniqueNumbers) {
    return uniqueNumbers.filter(function(num) { return num > 50; });
}
console.log("Numbers larger than 50:", filterLargerThan50(uniqueNumbers));

console.log('--- Using User Defined Function to find Max and Min ---');

function findMaxMin(numbersArr){
    var maxNum = numbersArr[0];
    var minNum = numbersArr[0];
    for (var i = 1; i < numbersArr.length; i++) {
        if (numbersArr[i] > maxNum) {
            var maxNum = numbersArr[i];
        }
        if (numbersArr[i] < minNum) {
            var minNum = numbersArr[i];
        }
    }
    console.log("Max Number is:", maxNum);
    console.log("Min Number is:", minNum);
}
findMaxMin(uniqueNumbers);

console.log('--- Using Math functions ---');

var maxNumber = Math.max(...uniqueNumbers);
var minNumber = Math.min(...uniqueNumbers);
console.log("Max Number is:", maxNumber);
console.log("Min Number is:", minNumber);