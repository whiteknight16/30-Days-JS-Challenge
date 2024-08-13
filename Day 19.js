// Activity 1: Basic Regular Expressions

// Task 1: Match all occurrences of the word "JavaScript" in a string.
let text1 = "JavaScript is a popular programming language. I love JavaScript!";
let regex1 = /JavaScript/g;
let matches1 = text1.match(regex1);
console.log("Task 1 - Matches for 'JavaScript':", matches1); // Logs: ["JavaScript", "JavaScript"]

// Task 2: Match all digits in a string.
let text2 = "My phone number is 123-456-7890.";
let regex2 = /\d/g;
let matches2 = text2.match(regex2);
console.log("Task 2 - Matches for digits:", matches2); // Logs: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

// Activity 2: Character Classes and Quantifiers

// Task 3: Match all words in a string that start with a capital letter.
let text3 = "JavaScript is awesome. Python is great too.";
let regex3 = /\b[A-Z][a-z]*\b/g;
let matches3 = text3.match(regex3);
console.log(
  "Task 3 - Matches for words starting with a capital letter:",
  matches3
); // Logs: ["JavaScript", "Python"]

// Task 4: Match all sequences of one or more digits in a string.
let text4 = "My numbers are 123, 4567, and 89.";
let regex4 = /\d+/g;
let matches4 = text4.match(regex4);
console.log("Task 4 - Matches for sequences of digits:", matches4); // Logs: ["123", "4567", "89"]

// Activity 3: Grouping and Capturing

// Task 5: Capture the area code, central office code, and line number from a US phone number format.
let text5 = "(123) 456-7890";
let regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let matches5 = text5.match(regex5);
console.log("Task 5 - Captures from phone number:", matches5.slice(1)); // Logs: ["123", "456", "7890"]

// Task 6: Capture the username and domain from an email address.
let text6 = "user@example.com";
let regex6 = /(\w+)@(\w+\.\w+)/;
let matches6 = text6.match(regex6);
console.log("Task 6 - Captures from email:", matches6.slice(1)); // Logs: ["user", "example.com"]

// Activity 4: Assertions and Boundaries

// Task 7: Match a word only if it is at the beginning of a string.
let text7 = "Hello world!";
let regex7 = /^\w+/;
let matches7 = text7.match(regex7);
console.log("Task 7 - Match at the beginning of the string:", matches7); // Logs: ["Hello"]

// Task 8: Match a word only if it is at the end of a string.
let text8 = "Welcome to the world";
let regex8 = /\w+$/;
let matches8 = text8.match(regex8);
console.log("Task 8 - Match at the end of the string:", matches8); // Logs: ["world"]

// Activity 5: Practical Applications

// Task 9: Validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
let password = "Passw0rd!";
let regex9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let isPasswordValid = regex9.test(password);
console.log("Task 9 - Is the password valid?", isPasswordValid); // Logs: true

// Task 10: Validate a URL.
let url = "https://www.example.com";
let regex10 = /^(https?:\/\/)?(www\.)?[\w-]+\.\w{2,}(\/\S*)?$/;
let isUrlValid = regex10.test(url);
console.log("Task 10 - Is the URL valid?", isUrlValid); // Logs: true
