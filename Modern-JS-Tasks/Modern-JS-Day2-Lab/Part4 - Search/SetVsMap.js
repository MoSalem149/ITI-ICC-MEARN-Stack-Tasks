/*
Set vs Map Objects
Set stores unique values (no duplicates), while Map stores key-value pairs where keys can be any data type.
*/

// Set Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set

const fruitSet = new Set();

fruitSet.add('apple');
fruitSet.add('banana');
fruitSet.add('apple'); // Duplicate, won't be added

fruitSet.has('banana'); // true
fruitSet.has('orange'); // false

fruitSet.size; // 2

fruitSet.delete('banana'); // true
fruitSet.has('banana'); // false

fruitSet.size; // 1

fruitSet.forEach(fruit => console.log(fruit)); // apple // Iterating over Set

fruitSet.clear();
fruitSet.size; // 0

fruitSet.add('apple');
fruitSet.add('banana');
fruitSet.add('orange');

// 3 itration methods
const entries = fruitSet.entries();
for (let entry of entries) {
    console.log(entry); // ['apple', 'apple'], ['banana', 'banana'], ['orange', 'orange']
}

const keys = fruitSet.keys();
for (let key of keys) {
    console.log(key); // 'apple', 'banana', 'orange'
}

const values = fruitSet.values();
for (let value of values) {
    console.log(value); // 'apple', 'banana', 'orange'
}

/*---------------------------------------------------------------------*/
// Map Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const fruitInventry = new Map();

fruitInventry.set('apple', {  quantity: 10, price: 2 }); // Key: 'apple', Value: { quantity: 10, price: 2 }
fruitInventry.set('banana', { quantity: 20, price: 1 }); // Key: 'banana', Value: { quantity: 20, price: 1 }
fruitInventry.set('orange', { quantity: 15, price: 1.5 }); // Key: 'orange', Value: { quantity: 15, price: 1.5 }

fruitInventry.get('apple'); // { quantity: 10, price: 2 }
fruitInventry.get('grape'); // undefined

fruitInventry.has('banana'); // true
fruitInventry.has('grape'); // false

fruitInventry.size; // 3

fruitInventry.delete('banana'); // true
fruitInventry.has('banana'); // false

for (let [fruit, details] of fruitInventry) {
    console.log(`${fruit}: Quantity = ${details.quantity}, Price = ${details.price}`);
    // apple: Quantity = 10, Price = 2
    // orange: Quantity = 15, Price = 1.5
}

fruitInventry.clear();
fruitInventry.size; // 0

// 3 itration methods
const entriesMap = fruitInventry.entries();
for (let entry of entriesMap) {
    console.log(entry); // ['apple', { quantity: 10, price: 2 }], ['banana', { quantity: 20, price: 1 }], ['orange', { quantity: 15, price: 1.5 }]
}

const keysMap = fruitInventry.keys();
for (let key of keysMap) {
    console.log(key); // 'apple', 'banana', 'orange'
}

const valuesMap = fruitInventry.values();
for (let value of valuesMap) {
    console.log(value); // { quantity: 10, price: 2 }, { quantity: 20, price: 1 }, { quantity: 15, price: 1.5 }
}

/*
Key Differences
Set: Stores only values, ensures uniqueness
Map: Stores key-value pairs, keys can be any type (objects, functions, primitives)
Use Set when: You need unique values only
Use Map when: You need to associate values with keys for efficient lookup
*/