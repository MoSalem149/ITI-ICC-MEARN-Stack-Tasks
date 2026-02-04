/*
PartTwo: 
Build  User Profile Object : 
• Create a user object with properties name (string) and age (number). 
•  Inside it, add a nested object address with properties street and city.  
• Then add a method getFullAddress() that returns the full address as a string (e.g., 
"123 Main St, Anytown"). 
*/

var user = {
    name: "Mohamed Salem",
    age: 23,
    address: {
        street: "Abo El-Wafa St",
        city: "Dameitta"
    },
    getFullAddress: function() {
        return `${this.address.street}, ${this.address.city}`;
    }
}

console.log(user.getFullAddress());