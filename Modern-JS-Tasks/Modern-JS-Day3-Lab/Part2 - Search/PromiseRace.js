//? Promise.race
//* Returns the result of the fastest Promise (fulfill or reject), like a race.

//? MDN Link:
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race

//! Demo:
const p1 = new Promise(r => setTimeout(() => r('Slow'), 500));
const p2 = new Promise((_,j) => setTimeout(() => j('Fast reject'), 100));
Promise.race([p1, p2]).catch(console.log); // "Fast reject"