class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (this.isEmpty()) return null;
    const value = this.top.value;
    this.top = this.top.next;
    this.length--;
    return value;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  display() {
    let arr = [];
    let curr = this.top;
    while (curr) {
      arr.unshift(curr.value);
      curr = curr.next;
    }
    console.log(arr.join(" ") || "empty");
  }
}

const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(10); // 10
stack.push(20); // 10 20
stack.push(30); // 10 20 30

stack.display(); // 10 20 30

console.log(stack.peek()); // 30

console.log(stack.size()); // 3

stack.pop(); // 30

console.log(stack.peek()); // 20

console.log(stack.size()); // 2

console.log(stack.isEmpty()); // false
