//? Promise.all
//* Waits for all Promises to fulfill, returns array of values; rejects immediately if any fails.

//? MDN Link:
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all

//! Demo:
Promise.all([
  Promise.resolve(1),
  new Promise(r => setTimeout(() => r(2), 50))
]).then(console.log); // [1, 2]