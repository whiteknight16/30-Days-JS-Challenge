// Activity 1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("*************");

for (let i = 1; i <= 10; i++) {
  console.log(`${5 * i}`);
}

console.log("*************");

// Activity 2

let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);

console.log("*************\n");

i = 10;
while (i > 0) {
  console.log(i + "\n");
  i -= 1;
}

console.log("*************\n");

// Activity 3

i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

console.log("*************");

function calcFactorialUsingDoWhile(n) {
  let fact = 1;
  let number = n;
  do {
    fact *= number;
    number--;
  } while (number > 1);

  return fact;
}

console.log(calcFactorialUsingDoWhile(5));

console.log("*************");

// Activity 4
for (let i = 0; i < 5; i++) {
  str = "";
  for (let j = 0; j <= i; j++) {
    str += "* ";
  }
  console.log(str);
}

console.log("*************\n");

// Activity 5
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  console.log(i + "\n");
}
console.log("*************\n");

for (let i = 1; i <= 10; i++) {
  if (i === 7) break;
  console.log(i + "\n");
}
console.log("*************\n");
