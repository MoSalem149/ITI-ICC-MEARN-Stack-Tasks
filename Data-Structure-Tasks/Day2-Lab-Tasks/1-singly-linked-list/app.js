class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let cur = this.head;
    while (cur.next.next) cur = cur.next;
    const popped = cur.next;
    cur.next = null;
    this.tail = cur;
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const node = this.head;
    this.head = node.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return node;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let cur = this.head;
    for (let i = 0; i < index; i++) cur = cur.next;
    return cur;
  }

  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    const newNode = new Node(value);
    const prev = this.get(index - 1);
    const next = prev.next;
    prev.next = newNode;
    newNode.next = next;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
    return this;
  }

  display() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    console.log(arr);
  }

  findMiddleNode() {
    if (!this.head) return null;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  hasLoop() {
    if (!this.head) return false;
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) return true;
    }
    return false;
  }

  findKthFromEnd(k) {
    if (k < 0 || !this.head) return null;
    let slow = this.head;
    let fast = this.head;
    for (let i = 0; i < k; i++) {
      if (!fast) return null;
      fast = fast.next;
    }
    while (fast) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow;
  }
}

const list = new SLL();

list.push(10);
list.display(); // [10]
list.push(20);
list.display(); // [10,20]

list.unshift(5);
list.display(); // [5,10,20]

list.pop();
list.display(); // [5,10]

list.shift();
list.display(); // [10]

list.push(20).push(30);
list.display(); // [10,20,30]

console.log("get(1):", list.get(1).value); // 20

list.set(1, 15);
list.display(); // [10,15,30]

list.insert(1, 12);
list.display(); // [10,12,15,30]

list.remove(2);
list.display(); // [10,12,30]

list.reverse();
list.display(); // [30,12,10]

console.log("Middle:", list.findMiddleNode().value);
console.log("2nd from end:", list.findKthFromEnd(2).value);
list.get(2).next = list.get(1);
console.log("Has loop:", list.hasLoop());

console.log("length:", list.length); // 3
