class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const value = this.first.value;
    this.first = this.first.next;
    if (this.first === null) {
      this.last = null;
    }
    this.length--;
    return value;
  }

  peek() {
    return this.first ? this.first.value : null;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  display() {
    let arr = [];
    let curr = this.first;
    while (curr) {
      arr.unshift(curr.value);
      curr = curr.next;
    }
    console.log(arr.join(" ") || "empty");
  }
}

const queue = new Queue();

console.log(queue.isEmpty()); // true

queue.push(10); // 10
queue.push(20); // 10 20
queue.push(30); // 10 20 30

queue.display(); // 10 20 30

console.log(queue.peek()); // 10

console.log(queue.size()); // 3

queue.pop(); // 10

console.log(queue.peek()); // 20

console.log(queue.size()); // 2

console.log(queue.isEmpty()); // false
