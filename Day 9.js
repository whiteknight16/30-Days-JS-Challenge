// Activity 1
// • Task 1: Select an HTML element by its ID and change its text content.
document.getElementById("example1").innerText = "Hi";
// • Task 2: Select an HTML element by its class and change its background color.
let ele = document.getElementsByClassName("example1");
for (let i = 0; i < ele.length; i++) {
  ele[i].style.backgroundColor = "red";
}
// Activity 2
// • Task 3: Create a new div element with some text content and append it to the body.
document
  .getElementsByClassName("example1")
  .append(
    document.createElement("div").className("example2").innerText("Harsh")
  );
// Task 4: Create a new li element and add it to an existing ul list.
let li = document.createElement("li");
li.className = "sampleList";
document.getElementsByClassName("sample1")[0].append(li);
//   Activity 3
// • Task 5: Select an HTML element and remove it from the DOM.
let toBeRemoved = document.getElementById("toBeRemoved");
toBeRemoved.remove();
// • Task 6: Remove the last child of a specific HTML element.
let elements = document.getElementsByClassName("sample2");
if (elements.length > 0) {
  let lastElement = elements[0].lastElementChild;
  if (lastElement) {
    elements[0].removeChild(lastElement);
  }
}
// Activity 4
// • Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).
document
  .getElementById("img1")
  .setAttribute(
    "src",
    "https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
  );
// • Task 8: Add and remove a CSS class to/ from an HTML element.
document.getElementById("img1").classList.remove("class");

// Activity 5
// • Task 9: Add a click event listener to a button that changes the text content of a paragraph.
function changeCOntent() {
  document.getElementById("p").innerText("Hi now I am 2");
}

document
  .getElementsByClassName("changeContent")
  .addEventListener("click", changeContent);
// • Task 10: Add a mouseover event listener to an element that changes its border color.
document
  .getElementByClassName("changeContent")
  .addEventListener("mouseover", function () {
    this.style.borderColor = "red";
  });
