/* 
2- Write a JavaScript code that converts the first letter of each word of the string in upper case.
    //Example : 'the quick brown fox'
    //Output : 'The Quick Brown Fox'
*/

console.log("----- Cap First Letter -----");

function capFirstLetter(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}
console.log("Finall Word After Cap:", capFirstLetter('the quick brown fox'));