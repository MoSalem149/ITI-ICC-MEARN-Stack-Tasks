// 3- Write a JavaScript function to get the month name from a particular date

console.log('--- Get Month Name from a Date ---');

function getMonthName(date) {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var monthIndex = date.getMonth();
    return monthNames[monthIndex];
}
var date = new Date("2002-09-14");
console.log("Month Name is:", getMonthName(date));