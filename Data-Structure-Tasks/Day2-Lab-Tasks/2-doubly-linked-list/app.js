class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DLL {
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (!this.head) return undefined;
    const node = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      node.prev = null;
    } else {
      this.head = node.next;
      this.head.prev = null;
      node.next = null;
    }
    this.length--;
    return node;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let cur;
    if (index < this.length / 2) {
      cur = this.head;
      for (let i = 0; i < index; i++) cur = cur.next;
    } else {
      cur = this.tail;
      for (let i = this.length - 1; i > index; i--) cur = cur.prev;
    }
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
    newNode.prev = prev;
    next.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removed = this.get(index);
    const prev = removed.prev;
    const next = removed.next;
    prev.next = next;
    next.prev = prev;
    removed.prev = removed.next = null;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    while (node) {
      let temp = node.prev;
      node.prev = node.next;
      node.next = temp;
      node = node.prev;
    }
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
}

const list = new DLL();

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

console.log("length:", list.length); // 3
