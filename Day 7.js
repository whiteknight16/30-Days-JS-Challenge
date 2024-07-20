// Activity 1
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the
// object to the console.
let book = { title: "xyz", author: "abc", year: 2024 };
console.log(book);
// • Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Activity 2
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the
// result of calling this method.
book.return = function () {
  return [book.title, book.author];
};
console.log(book.return());
// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year
// property, then log the updated object.
book.updateYear = function (year) {
  this.year = year;
  console.log(this);
};

book.updateYear(2023);

// Activity 3
// • Task 5: Create a nested object representing a library with properties like name and books (an array of
//     book objects), and log the library object to the console.
let library = {
  name: "New Book",
  bookObj: [
    { title: "xyz", author: "abTY", year: 2024 },
    { title: "xyz", author: "aDc", year: 2024 },
  ],
};

console.log(library);
// • Task 6: Access and log the name of the library and the titles of all the books in the library.
for (let i = 0; i < library.bookObj.length; i++) {
  console.log(library.bookObj[i].title);
  console.log(library.bookObj[i].author);
}

// Activity 4
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's
// title and year, and log the result of calling this method.
book.getDetails = function () {
  console.log(`Title:${this.title} Year:${this.year}`);
};

// Activity 5
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and
// its value.
for (let i = 0; i < book.length; i++) {
  console.log(book[i]);
}

// • Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
