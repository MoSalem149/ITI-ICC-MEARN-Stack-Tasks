/*
PartOne: 
A: 
- Create Person Object Contains the following Properties: ID:1, Name : ”Empty” ,
- Create  Employee object which contains Salary property  with set and get using defineProperty  and set  this value with bouns  20% and make it’s prototype Person Object  
- Create HREmployee object which contains location Property and make it’s Prototype Employee object: 
-- Test prototype chain in console for HREmployee and Employee objects  
-- Try to access person ID and Person Name using HREmployee object
-- Define Name And ID Properties with values For HREmployee Object then test if it accessible with person object  
-- Define Age Property with Person Object and test if it accessible with HREmployee Object 
-- After Try previous ,try create the previous objects again but using defineProperties to create each object proporty
*/

// Create Person Object Contains the following Properties: ID:1, Name : ”Empty”
var person = {
    id: 1,
    name: "Empty"
}

// Create  Employee object which contains Salary property  with set and get using defineProperty  and set  this value with bouns
var employee = Object.create(person);
Object.defineProperty(employee, "salary", {
    get: function() {
        return salary;
    },
    set: function(value) {
        salary = value + (value * 0.2);
    }
})
employee.salary = 5000;
console.log("Employee Salary:", employee.salary);

// Create HREmployee object which contains location Property and make it’s Prototype Employee object:
var hrEmployee = Object.create(employee);
Object.defineProperty(hrEmployee, "location", {
    value: "Dameitta",
    writable: true,
    enumerable: true,
    configurable: true
})
console.log("HR Employee Location:", hrEmployee.location);

// -- Test prototype chain in console for HREmployee and Employee objects
console.log("HR Employee Prototype:", Object.getPrototypeOf(hrEmployee) === employee);
console.log("Employee Prototype:", Object.getPrototypeOf(employee) === person);

// -- Try to access person ID and Person Name using HREmployee object
console.log("HR Employee ID:", hrEmployee.id);
console.log("HR Employee Name:", hrEmployee.name);

// -- Define Name And ID Properties with values For HREmployee Object then test if it accessible with person object
hrEmployee.id = 2;
hrEmployee.name = "Mohamed Salem";
console.log("HR Employee New ID:", hrEmployee.id);
console.log("HR Employee New Name:", hrEmployee.name);

// -- Define Age Property with Person Object and test if it accessible with HREmployee Object
Object.defineProperty(person, "age", {
    value: 30,
    writable: true,
    enumerable: true,
    configurable: true
});
console.log("HR Employee Age:", hrEmployee.age);

// -- After Try previous ,try create the previous objects again but using defineProperties to create each object proporty
// var person2 = {};
// Object.defineProperties(person2, {
//     id: {
//         value: 1,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     name: {
//         value: "Empty",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// var employee2 = Object.create(person2);
// Object.defineProperties(employee2, {
//     salary: {
//         get: function() {
//             return salary;
//         },
//         set: function(value) {
//             salary = value + (value * 0.2);
//         }
//     }
// });

// var hrEmployee2 = Object.create(employee2);
// Object.defineProperties(hrEmployee2, {
//     location: {
//         value: "Cairo",
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });