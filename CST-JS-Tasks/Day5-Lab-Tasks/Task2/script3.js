/*
3- Write a JavaScript code that finds the longest word within the string. (Bonus)
    //Example : 'Web Development Tutorid'
    //Output : 'Development'
*/

console.log("----- Longest Word -----");

function findLongestWord(str) {
    var words = str.split(' ');
    var longestWord = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log("The Longest Word is:",findLongestWord('Web Development Tutorid'));