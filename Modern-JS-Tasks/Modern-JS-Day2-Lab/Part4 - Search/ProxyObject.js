/*
Proxy Object
In JavaScript, a proxy is an object that acts as an intermediary between the user and the parent object, allowing you to intercept and control basic operations on the object such as reading, writing, and deleting. A proxy is created using two parameters: `target` (the parent object) and `handler` (an object containing functions called "traps" that define the desired behavior).
*/

// Proxy: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy

const target = { message: "Hello, World!" };

const handler = {
    get: function(target, prop, receiver) {
        if (prop === 'message') {
            return `Proxy says: ${target[prop]}`;
        }
        return Reflect.get(target, prop, receiver);
    }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message); // Proxy says: Hello, World!
console.log(proxy.nonExistent); // undefined