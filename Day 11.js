// Activity 1
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promise1.then((message) => {
  console.log(message);
});
// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using . catch() .
const promise2 = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

promise2.catch((error) => {
  console.error(error.message);
});

//   Activty 3
const fetchData1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fetched data from server 1");
  }, 1000);
});

const fetchData2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fetched data from server 2");
  }, 2000);
});

const fetchData3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Fetched data from server 3");
  }, 3000);
});

fetchData1
  .then((message) => {
    console.log(message);
    return fetchData2;
  })
  .then((message) => {
    console.log(message);
    return fetchData3;
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error.message);
  });

//   Activity 3
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
async function logResolvedValue(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

// Example usage:
const examplePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Example resolved value");
  }, 1000);
});

logResolvedValue(examplePromise);
// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function handleRejectedPromise(promise) {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

const rejectedPromise = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Example rejection"));
  }, 1000);
});

handleRejectedPromise(rejectedPromise);
// Activity 4
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://api.publicapis.org/entries")
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
// • Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await.

async function fetchData() {
  try {
    const response = await fetch("https://api.publicapis.org/entries");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

fetchData();
// Activity 5
// • Task 8: Use Promise . all to wait for multiple promises to resolve and then log all their values.
const p1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([p1, p2, p3])
  .then((values) => {
    console.log("All promises resolved:", values);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.
Promise.race([p1, p2, p3])
  .then((value) => {
    console.log("First promise resolved:", value);
  })
  .catch((error) => {
    console.error("One of the promises rejected:", error);
  });
