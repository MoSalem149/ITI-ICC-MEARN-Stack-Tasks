// Write JS code to Ask User Enter Price then print total price with tax to nearest 2 digits  (tax=.14)

var price = parseFloat(prompt("Enter the price:"));
var tax = 0.14;
var totalPrice = price + (price * tax);
console.log("Total Price with tax: " + totalPrice.toFixed(2));