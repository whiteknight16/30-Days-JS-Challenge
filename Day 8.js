// Activity 1
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log
// the string to the console.
let string = `Name is ${"Harris"} age is ${30}`;
console.log(string);
// • Task 2: Create a multi-line string using
//  template literals and log it to the console.
string = `This is gonna be a multiline sttring
Yeee`;
console.log(string);

// Activity 2
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log
// them to the console.
let arr = [1, 2, 3, 4];
const [first, second] = arr;
console.log(first);
console.log(second);
// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the
// console.

let book = { title: "xyz", author: "abc", year: 2024 };
const { title, author } = book;
console.log(title);
console.log(author);

// Activity 3
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus
// additional elements, and log the new array to the console.
console.log([...arr, 6, 7, 8]);
// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and
// return the result.
function sum(...number) {
  let total = number.reduce((acc, curr) => acc + curr, 0);
  return total;
}
console.log(sum(1, 2, 30));

// Activity 4
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter
// having a default value of 1 . Log the result of calling this function with and without the second parameter.
const product = (a, b = 1) => {
  return a * b;
};
console.log(product(4, 3));
console.log(product(4));
// Activity 5
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object
// to the console.
let books_obj = {
  title: "new",
  author: "smn",
  giveDetails: function () {
    return `The book name ${this.title} is written by ${this.author}`;
  },
};

console.log(books_obj);
// • Task 9: Create an object with computed property names based on variables and log the object to the
// console.

const pName1 = "title";
const pName2 = "year";

const bookss = {
  [pName1]: "To kill",
  [pName2]: 2023,
};

console.log(bookss);
