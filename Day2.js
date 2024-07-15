// Activity 1
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const modulus = (a, b) => {
  return a % b;
};

console.log(add(3, 4));
console.log(subtract(3, 4));
console.log(multiply(3, 4));
console.log(divide(3, 4));
console.log(modulus(3, 4));

// Activity 2
let a = 2;
a += 1;
console.log(a);

a -= 1;
console.log(a);

// Activity 3
console.log(2 > 3);
console.log(2 < 3);
console.log(2 <= 3);
console.log(2 >= 2);
console.log(2 == 2);
console.log(2 != 2);

// Activity 4
console.log(2 > 3 && 2 == 2);
console.log(2 > 3 || 2 == 2);
console.log(!(2 > 3));

// Activty 5
let v = 0(2 > 3) ? (v = 5) : (v = 7);
console.log(v);
