// #Activity1
// • Task 1: Add a click event listener to a button that changes the text content of a paragraph.
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.getElementById("task1").addEventListener("click", function () {
  document.getElementById("p1").innerText = "HGey";
});
// • Task 2: Add a double-click event listener to an image that toggles its visibility.
document.getElementById("task2").addEventListener("dblclick", function () {
  document.getElementById("task2").style.visibility = "hidden";
});

// Activity 2
// • Task 3: Add a mouseover event listener to an element that changes its background color.
document.getElementById("task3").addEventListener("mouseover", function () {
  document.getElementById("task3").style.backgroundColor = "red";
});
// • Task 4: Add a mouseout event listener to an element that resets its background color.
document.getElementById("task3").addEventListener("mouseout", function () {
  document.getElementById("task3").style.backgroundColor = "blue";
});

// Activity 3
// • Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
document.getElementById("task5").addEventListener("keydown", function (e) {
  console.log(e.key);
});

// • Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
document.getElementById("task5").addEventListener("keyup", function (e) {
  console.log(`Value: ${document.getElementById("task5").value}`);
});

// Activity 4
// • Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data
// to the console.
document.getElementById("task7").addEventListener("submit", function (e) {
  e.preventDefault();

  let formData = new FormData(e.target);
  console.log(`${formData.entries}`);
});
// • Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
document.getElementById("task8").addEventListener("change", function () {
  let selectedValue = this.value;
  document.getElementsByTagName(
    h1
  ).innerText = `Selected value: ${selectedValue}`;
});

// Activity 5
document
  .getElementById("task9List")
  .addEventListener("click", function (event) {
    if (event.target && event.target.nodeName === "LI") {
      console.log(`List item clicked: ${event.target.textContent}`);
    }
  });
// • Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document
  .getElementById("parentElement")
  .addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("dynamic-item")) {
      console.log(`Dynamic item clicked: ${event.target.textContent}`);
    }
  });

document.getElementById("addItemButton").addEventListener("click", function () {
  const newItem = document.createElement("div");
  newItem.className = "dynamic-item";
  newItem.textContent = `Item ${
    document.querySelectorAll(".dynamic-item").length + 1
  }`;
  document.getElementById("parentElement").appendChild(newItem);
});
