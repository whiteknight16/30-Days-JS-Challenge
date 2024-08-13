// Activity 1: Creating and Exporting Modules
// • Task 1•
// . Create a module that exports a function to add two numbers. Import and use this module in another script.
function add(a, b) {
  return a + b;
}
module.exports = add;
// • Task 2•
// . Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.
const person = {
  name: "John Doe",
  age: 30,
  greet: function () {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  },
};
module.exports = person;
// Activity 2: Named and Default Exports
// • Task 3•
// . Create a module that exports multiple functions using named exports. Import and use these functions in another script.
function multiply(a, b) {
  return a * b;
}

module.exports = { multiply };
// • Task 4
// . Create a module that exports a single function using default export. Import and use this function in another script.

// subtract.js
function subtract(a, b) {
  return a - b;
}

export default subtract;

// Importing Entire Modules
// Activity 3:
// • Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties.
// utils.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
// Activity 4: Using Third-Party Modules
// • Task 6:
// Install a third-party module (e.g., Iodash ) using npm. Import and use a function from this module in a script.
import _ from "lodash";

const array = [1, 2, 3, 4, 5];
const reversedArray = _.reverse([...array]);

console.log("Original Array:", array);
console.log("Reversed Array:", reversedArray);
// • Task 7:
// Install a third-party module (e.g., axios ) using npm. Import and use this module to make a network request in a script.
const result = axios.get("https://jsonplaceholder.typicode.com/posts").data;
// Activity 5: Module Bundling (Optional)
// • Task 8.
// • Use a module bundler like Webpack or Parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process.
import { add } from "./src/add.js";
console.log(add(5, 3));
