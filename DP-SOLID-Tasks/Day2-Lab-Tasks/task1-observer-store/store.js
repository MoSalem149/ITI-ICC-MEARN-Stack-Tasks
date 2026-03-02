// TODO
/*
A store that sells products, and every day the store 
puts new products. The store wants to let every person 
that is interested know that a new product is in the store now.
*/

// Store Class with Observer Design Pattern
class Store {
  constructor() {
    this.products = [];
    this.subscribers = []; // Observers(People)
  }
  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }
  notify(product) {
    this.subscribers.forEach((sub) => sub.update(product));
  }
  addProduct(product) {
    this.products.push(product);
    this.notify(product);
  }
} //* DONE

// Class User
class User {
  constructor(name) {
    this.name = name;
  }
  update(product) {
    console.log(`${this.name}: "${product}" is now available in the store`);
  }
}

//!TEST
const store = new Store();

const u1 = new User("Mohamed");
const u2 = new User("Salem");

//?RESULTS
store.subscribe(u1);
store.subscribe(u2);

store.addProduct("iPhone 17 Pro Max");
store.addProduct("iPhone 16 Pro Max");
