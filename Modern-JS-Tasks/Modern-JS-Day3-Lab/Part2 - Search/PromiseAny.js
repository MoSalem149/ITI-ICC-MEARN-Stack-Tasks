//? Promise.any
//* Returns the first Promise that fulfills successfully; rejects with AggregateError if all fail. Useful for "fastest success".

//? MDN Link:
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/any

//! Demo:
const p1 = Promise.reject('Error');
const p2 = new Promise(r => setTimeout(() => r('Success!'), 100));
Promise.any([p1, p2]).then(console.log); // "Success!"
