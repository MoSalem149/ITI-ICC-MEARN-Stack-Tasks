//TODO
/*
2-You have been hired to develop an application for a car shop. The owner of the car shop wants an easy to navigate interface with the ability to document all the types of vehicles that he fixes in his shop. On a daily basis, through his and his employers hands pass around dozen different types of vehicles. You need to find a clean and concise way to insert all those types of cars into your database.
*/

// Car Class
class Car {
  constructor(brand, model, year, price) {
    // Props
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.price = price;
  }
}

// CarBuilder  Class with Builder Design Pattern
class CarBuilder {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.price = null;
  }

  // Methods
  setBrand(brand) {
    this.brand = brand;
    return this;
  }
  setModel(model) {
    this.model = model;
    return this;
  }
  setYear(year) {
    this.year = year;
    return this;
  }
  setPrice(price) {
    this.price = price;
    return this;
  }

  build() {
    return new Car(this.brand, this.model, this.year, this.price);
  }
} //*DONE

//!TEST
const car1 = new CarBuilder()
  .setBrand("BMW")
  .setModel("X5")
  .setYear(2023)
  .setPrice(50000)
  .build();

//?RESULTS
console.log(car1);

// ديزاين باترن ده حل مشكله لما يكون عندك اوبجكت معقد وفيه بارامتر كتتير وانت عايز ترتبهم بشكل منطقي
