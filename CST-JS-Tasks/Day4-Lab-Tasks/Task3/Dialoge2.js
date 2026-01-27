// Recive from user  5 numbers and print these nums in console with 5 digits
for (i = 1; i <= 5; i++) {
    var nums = parseFloat(prompt("Enter " + i + " number:"));
    console.log("Number " + i + " : " + nums.toFixed(5));
}