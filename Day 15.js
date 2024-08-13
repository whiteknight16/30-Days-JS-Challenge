// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
  const outerVariable = "I'm from the outer scope!";

  // Inner function that accesses the outerVariable
  function innerFunction() {
    return outerVariable;
  }

  return innerFunction;
}

const inner = outerFunction(); // Get the inner function
console.log(inner()); // Logs: "I'm from the outer scope!"
// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counterModule() {
  let counter = 0; // Private variable

  // Function to increment the counter
  function increment() {
    counter++;
  }

  // Function to get the current value of the counter
  function getValue() {
    return counter;
  }

  return {
    increment: increment,
    getValue: getValue,
  };
}

const counter = counterModule();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Logs: 2
// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.

function idGenerator() {
  let lastId = 0; // Private variable to store the last ID

  return function () {
    lastId++;
    return lastId;
  };
}

const generateId = idGenerator();
console.log(generateId()); // Logs: 1
console.log(generateId()); // Logs: 2
console.log(generateId()); // Logs: 3
// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.

function greeting(name) {
  return function () {
    return `Hello, ${name}!`;
  };
}

const greetJohn = greeting("John");
console.log(greetJohn()); // Logs: "Hello, John!"

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray() {
  const functionArray = [];

  for (let i = 0; i < 5; i++) {
    functionArray.push(function () {
      console.log(i);
    });
  }

  return functionArray;
}

const functions = createFunctionArray();
functions[0](); // Logs: 0
functions[1](); // Logs: 1
functions[2](); // Logs: 2
functions[3](); // Logs: 3
functions[4](); // Logs: 4

// Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function collectionModule() {
  const collection = []; // Private array to store items

  return {
    // Method to add an item
    addItem: function (item) {
      collection.push(item);
    },
    // Method to remove an item
    removeItem: function (item) {
      const index = collection.indexOf(item);
      if (index > -1) {
        collection.splice(index, 1);
      }
    },
    // Method to list all items
    listItems: function () {
      return collection.slice(); // Return a copy of the array
    },
  };
}

const myCollection = collectionModule();
myCollection.addItem("apple");
myCollection.addItem("banana");
console.log(myCollection.listItems()); // Logs: ["apple", "banana"]
myCollection.removeItem("apple");
console.log(myCollection.listItems()); // Logs: ["banana"]
// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function memoize(fn) {
  const cache = {}; // Private cache to store results

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
  };
}

function slowFunction(num) {
  // Simulate a slow computation
  return num * num;
}

const memoizedSlowFunction = memoize(slowFunction);
console.log(memoizedSlowFunction(5)); // Computes and logs: 25
console.log(memoizedSlowFunction(5)); // Retrieves from cache and logs: 25
// Task 8: Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorial() {
  const cache = {}; // Private cache to store factorial results

  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else if (cache[n]) {
      return cache[n];
    } else {
      const result = n * factorial(n - 1);
      cache[n] = result;
      return result;
    }
  }

  return factorial;
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // Computes and logs: 120
console.log(memoizedFactorial(5)); // Retrieves from cache and logs: 120
