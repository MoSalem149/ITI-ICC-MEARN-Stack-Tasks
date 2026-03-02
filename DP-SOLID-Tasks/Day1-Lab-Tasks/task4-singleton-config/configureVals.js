//TODO
/*
4- In this challenge, you have to implement a configuration that uses the singleton pattern. You are given a class ConfigureVals. Define it as follows:

It should have a constructor that defines the properties xpoint, ypoint, and shape.

The constructor should initialize xpoint, ypoint, and shape to 0, 0 ,null if the values for these properties are not passed to t
he constructor.
Make sure that only a single instance of the class can be made by defining the function getConfiguration.
*/

// Class ConfigureVals with Singleton Design Pattern
class ConfigureVals {
  static getConfiguration(xpoint = 0, ypoint = 0, shape = null) {
    // Create one instance
    if (!ConfigureVals.instance) {
      ConfigureVals.instance = new ConfigureVals(xpoint, ypoint, shape);
    }
    return ConfigureVals.instance;
  }
} //*DONE

//!TEST
const config1 = ConfigureVals.getConfiguration(10, 20, "circle");
const config2 = ConfigureVals.getConfiguration();

//?RESULTS
console.log(config1);
console.log(config2);
console.log(config1 === config2);
