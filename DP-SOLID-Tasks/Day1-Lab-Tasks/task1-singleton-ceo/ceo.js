//TODO
/*
1-You have asked to develop an application for a company X.
The company has only one chief executive officer (CEO) . The
application store been some information a bout the CEO like: name,
age and address. You need to find a clean and concise
implementation of the CEO class in the application .
*/

// CEO Class with Singleton Design Pattern
class CEO {
  constructor(name, age, address) {
    // Create one instance
    if (CEO.instance) return CEO.instance;

    // Props
    this.name = name;
    this.age = age;
    this.address = address;

    CEO.instance = this;
  }
} //*DONE

//!TEST
const ceo1 = new CEO("Mohamed", 24, "Dameitta");
const ceo2 = new CEO("Salem", 23, "Mansoura");

//?RESULTS
console.log(ceo1);
console.log(ceo2);
console.log(ceo1 === ceo2);

// الباترن ده حل مشكله لما يكون عندك اوبجكت وعايز تكريت منه نسخه واحد بس ف الميموري وكل مره تستدعيها ترجع النسخه دي بيوفر ف الرام و والبروسيس
