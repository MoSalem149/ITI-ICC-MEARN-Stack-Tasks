// 4- Write JavaScript function that returns random array of numbers between 1 : 10 Array length is 8 and no repeated random data appears on array

console.log('--- Generate Random Array of Unique Numbers ---');

function getRandomArray() {
    var arr = [];
    while (arr.length < 8) {
        var randomNum = Math.floor(Math.random() * 10) + 1;
        if (arr.indexOf(randomNum) === -1) {
            arr.push(randomNum);
        }
    }
    return arr;
}
console.log("Random Array is:", getRandomArray());