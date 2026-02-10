//? Promise.allSettled
//* Waits for all Promises to settle (fulfill or reject), returns array with status for each. Doesn't reject if some fail.

//? MDN Link:
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled

//! Demo:
Promise.allSettled([
  Promise.resolve(1),
  Promise.reject('Error')
]).then(console.log);
// [{status: 'fulfilled', value: 1}, {status: 'rejected', reason: 'Error'}]