// Activity 1
function evenOrOdd(n) {
  if (n & 1) return "Odd";
  else return "Even";
}

function sqare(n) {
  return n * n;
}

console.log(evenOrOdd(2));
console.log(sqare(2));

// Activity 2
function maxOfTwoNumber(a, b) {
  return a >= b ? a : b;
}

function concateString(str1, str2) {
  return str1 + str2;
}

console.log(maxOfTwoNumber(2, 3));
console.log(concateString("abc", "qwe"));

// Activity 3
const sumOfTwo = (a, b) => {
  return a + b;
};

const checkCharacter = (str, char) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) return true;
  }
  return false;
};

console.log(sumOfTwo(4, 5));
console.log(checkCharacter("abc", "b"));

// Activity 4
const product = (a, b = 3) => {
  return a * b;
};

const greet = (name, age) => {
  return `Hey ${name} you are ${age}`;
};

console.log(product(2));
console.log(greet("Harris", 3));

// Activity 5
// A “higher-order function” is a function that accepts functions as parameters and/or returns a function.

const hey = () => {
  console.log("Hey");
};
function higherOrder(greet, number) {
  for (let i = 0; i < number; i++) {
    greet();
  }
}
higherOrder(hey, 5);

function anotherHigherOrderFunction(f1, f2, val) {
  let c = f1(val);
  console.log(c);
  console.log(f2(c));
}

anotherHigherOrderFunction(product, product, 4);
