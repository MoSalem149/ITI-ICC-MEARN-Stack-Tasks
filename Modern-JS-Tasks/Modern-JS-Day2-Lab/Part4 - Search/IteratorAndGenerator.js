/*
Iterator and Generator
Iterators are objects that define how to access items in a collection one at a time, while generators are special functions that can pause and resume execution using yield.
*/

// Iterators and Generators Guide: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators

// Manual iterator
let range = {
    from: 1,
    to: 5,
    
    [Symbol.iterator]() {
        return {
            current: this.from,
            last: this.to,
            
            next() {
                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}


// Generator function - simpler way to create iterators
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: undefined, done: true}

// Using generator with for...of
function* numberRange(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

for (let num of numberRange(1, 5)) {
    console.log(num); // 1, 2, 3, 4, 5
}
