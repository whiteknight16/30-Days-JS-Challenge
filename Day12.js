// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error
// and log an appropriate message to the console.

function throwError() {
  throw new Error("This is an intentional error");
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a
// try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
  try {
    if (denominator === 0) {
      throw new Error("Cannot divide by zero");
    }
    return numerator / denominator;
  } catch (error) {
    console.error(error.message);
  }
}
// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch,
// and finally blocks to observe the execution flow.

try {
  console.log("Inside try block");
} catch (error) {
  console.error("Inside catch block", error.message);
} finally {
  console.log("Inside finally block");
}

// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw
// an instance of this custom error in a function and handle it using a try-catch
// block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is
// not empty) and throws a custom error if the validation fails. Handle the custom
// error using a try-catch block.

function validateInput(input) {
  if (input === "") {
    throw new CustomError("Input cannot be empty");
  }
}
// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use . catch() to
// handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
  const random = Math.random();
  if (random < 0.5) {
    resolve("Promise resolved");
  } else {
    reject(new Error("Promise rejected"));
  }
});
// • Task 7: Use try-catch within an async function to handle errors from a promise
// that randomly resolves or rejects, and log the error message.
async function handleRandomPromise() {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the
// error using . catch() . Log an appropriate error message to the console.

fetch("https://api.publicapis.org/invalid-url") // Invalid URL
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

// • Task 9: Use the fetch API to request data from an invalid URL within an async
// function and handle the error using try-catch. Log an appropriate error
// message.

async function fetchDataInvalidUrl() {
  try {
    const response = await fetch("https://api.publicapis.org/invalid-url");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
