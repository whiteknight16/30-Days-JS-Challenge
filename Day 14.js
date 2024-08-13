// Activity 1: Class Definition
// • Task 1.
// • Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greeting() {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// • Task 2.
// • Add a method to the Person class that updates the age property and logs the updated age.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }
}

// Example usage
const person = new Person("Alice", 30);
console.log(person.greeting());
person.updateAge(31);

// Activity 2: Class Inheritance
// • Task 3: Define a class Student that extends the Person class. Add a property stucentld and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person1 {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }
}

const student = new Student("Bob", 20, "S12345");
console.log(`Student ID: ${student.getStudentId()}`);

// • Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.

// Activity 3: Static Methods and Properties
// • Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  static genericGreeting() {
    return "Hello, nice to meet you!";
  }
}

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the greeting method
  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// • Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  // Task 7: Add a getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Task 8: Add a setter method to update the name properties
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Task 5: Add a static method to the Person class
  static genericGreeting() {
    return "Hello, this is a generic greeting message.";
  }
}

class Student extends Person {
  static studentCount = 0; // Task 6: Add a static property to keep track of the number of students

  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.studentCount++; // Increment the student count
    console.log(`Total number of students: ${Student.studentCount}`); // Log the total number of students
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the greeting method
  greeting() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Example usage for Task 6
const student1 = new Student("Alice", 22, "S67890");
const student2 = new Student("Bob", 23, "S67891");

// • Getters and Setters
// Activity 4.
// • Task 7.
// • Add a getter method to the Person class to return the full name (assume a FirstName and lastName property). Create an instance and log the full name using the getter.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  // Task 5: Add a static method to the Person class
  static genericGreeting() {
    return "Hello, this is a generic greeting message.";
  }

  // Task 7: Add a getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  static studentCount = 0; // Task 6: Add a static property to keep track of the number of students

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    Student.studentCount++; // Increment the student count
    console.log(`Total number of students: ${Student.studentCount}`); // Log the total number of students
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the greeting method
  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Example usage for Task 7
const person = new Person("John", "Doe", 30);
console.log(person.fullName); // Log the full name using the getter
// • Task 8.
// • Add a setter method to the Person class to update the name properties ( FirstName and lastName ). Update the name using the setter and log the updated full name.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }

  updateAge(newAge) {
    this.age = newAge;
    console.log(`Updated age: ${this.age}`);
  }

  // Task 5: Add a static method to the Person class
  static genericGreeting() {
    return "Hello, this is a generic greeting message.";
  }

  // Task 7: Add a getter method to return the full name
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Task 8: Add a setter method to update the name properties
  set fullName(name) {
    const [firstName, lastName] = name.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Student extends Person {
  static studentCount = 0; // Task 6: Add a static property to keep track of the number of students

  constructor(firstName, lastName, age, studentId) {
    super(firstName, lastName, age);
    this.studentId = studentId;
    Student.studentCount++; // Increment the student count
    console.log(`Total number of students: ${Student.studentCount}`); // Log the total number of students
  }

  getStudentId() {
    return this.studentId;
  }

  // Override the greeting method
  greeting() {
    return `Hello, my name is ${this.firstName} ${this.lastName}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
  }
}

// Example usage for Task 7 and Task 8
const person = new Person("John", "Doe", 30);
console.log(person.fullName); // Log the full name using the getter

person.fullName = "Jane Smith"; // Update the name using the setter
console.log(person.fullName); // Log the updated full name
// Activity 5: Private Fields (Optional)
// • Task 9
// : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
// • Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
