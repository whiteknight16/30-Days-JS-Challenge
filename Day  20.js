// Activity 1: Understanding LocalStorage

// Task 1: Save and Retrieve a String Value
localStorage.setItem("myString", "Hello, LocalStorage!");
let retrievedString = localStorage.getItem("myString");
console.log("Task 1 - Retrieved string from localStorage:", retrievedString); // Logs: "Hello, LocalStorage!"

// Task 2: Save and Retrieve an Object
let user = {
  name: "John Doe",
  email: "john@example.com",
};
localStorage.setItem("user", JSON.stringify(user));
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log("Task 2 - Retrieved object from localStorage:", retrievedUser); // Logs the object {name: "John Doe", email: "john@example.com"}

// Activity 2: Using LocalStorage

// Task 3: Save Form Data to LocalStorage and Display on Page Load
document.addEventListener("DOMContentLoaded", function () {
  let form = document.getElementById("userForm");
  let nameInput = document.getElementById("name");
  let emailInput = document.getElementById("email");
  let display = document.getElementById("display");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let userData = {
      name: nameInput.value,
      email: emailInput.value,
    };
    localStorage.setItem("formData", JSON.stringify(userData));
    displayData();
  });

  function displayData() {
    let storedData = JSON.parse(localStorage.getItem("formData"));
    if (storedData) {
      display.textContent = `Name: ${storedData.name}, Email: ${storedData.email}`;
    }
  }

  displayData();
});

// Task 4: Remove Item from LocalStorage
console.log(
  "Task 4 - LocalStorage before removal:",
  localStorage.getItem("formData")
); // Logs the stored form data
localStorage.removeItem("formData");
console.log(
  "Task 4 - LocalStorage after removal:",
  localStorage.getItem("formData")
); // Logs null

// Activity 3: Understanding SessionStorage

// Task 5: Save and Retrieve a String Value in SessionStorage
sessionStorage.setItem("mySessionString", "Hello, SessionStorage!");
let retrievedSessionString = sessionStorage.getItem("mySessionString");
console.log(
  "Task 5 - Retrieved string from sessionStorage:",
  retrievedSessionString
); // Logs: "Hello, SessionStorage!"

// Task 6: Save and Retrieve an Object in SessionStorage
let sessionUser = {
  name: "Jane Doe",
  email: "jane@example.com",
};
sessionStorage.setItem("sessionUser", JSON.stringify(sessionUser));
let retrievedSessionUser = JSON.parse(sessionStorage.getItem("sessionUser"));
console.log(
  "Task 6 - Retrieved object from sessionStorage:",
  retrievedSessionUser
); // Logs the object {name: "Jane Doe", email: "jane@example.com"}

// Activity 4: Using SessionStorage

// Task 7: Save Form Data to SessionStorage and Display on Page Load
document.addEventListener("DOMContentLoaded", function () {
  let sessionForm = document.getElementById("sessionForm");
  let sessionNameInput = document.getElementById("sessionName");
  let sessionEmailInput = document.getElementById("sessionEmail");
  let sessionDisplay = document.getElementById("sessionDisplay");

  sessionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let sessionUserData = {
      name: sessionNameInput.value,
      email: sessionEmailInput.value,
    };
    sessionStorage.setItem("sessionFormData", JSON.stringify(sessionUserData));
    displaySessionData();
  });

  function displaySessionData() {
    let storedSessionData = JSON.parse(
      sessionStorage.getItem("sessionFormData")
    );
    if (storedSessionData) {
      sessionDisplay.textContent = `Name: ${storedSessionData.name}, Email: ${storedSessionData.email}`;
    }
  }

  displaySessionData();
});

// Task 8: Remove Item from SessionStorage
console.log(
  "Task 8 - SessionStorage before removal:",
  sessionStorage.getItem("sessionFormData")
); // Logs the stored session form data
sessionStorage.removeItem("sessionFormData");
console.log(
  "Task 8 - SessionStorage after removal:",
  sessionStorage.getItem("sessionFormData")
); // Logs null

// Activity 5: Comparing LocalStorage and SessionStorage

// Task 9: Save Value to Both Storages and Log Them
function saveToBothStorages(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);
  console.log(`Task 9 - Value in localStorage: ${localStorage.getItem(key)}`);
  console.log(
    `Task 9 - Value in sessionStorage: ${sessionStorage.getItem(key)}`
  );
}
saveToBothStorages("storageTest", "TestValue");

// Task 10: Clear All Data from Both Storages
function clearAllStorages() {
  localStorage.clear();
  sessionStorage.clear();
  console.log("Task 10 - LocalStorage after clearing:", localStorage);
  console.log("Task 10 - SessionStorage after clearing:", sessionStorage);
}
clearAllStorages();
