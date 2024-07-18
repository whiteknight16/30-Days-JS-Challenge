// Activity 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

console.log(arr[0]);
console.log(arr[arr.length - 1]);

// Activity 2
arr.push(6);
console.log(arr);

arr.pop(6);
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(1);
console.log(arr);

// arr.unshift(2);
// console.log(arr);

// Activity 3
const newArr = arr.map((el) => {
  return el * 2;
});

console.log(newArr);

const filteredArr = arr.filter((el) => {
  return el % 2 === 0;
});

console.log(filteredArr);

const reducedArrSum = arr.reduce((result, itm) => {
  return result + itm;
});

console.log(reducedArrSum);

// Activity 4
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
arr.forEach((i) => {
  console.log(i);
});

// Activity 5
let twoDArr = [
  [1, 2],
  [3, 4],
];

for (let i = 0; i < twoDArr.length; i++) {
  for (let j = 0; j < twoDArr[0].length; j++) {
    console.log(twoDArr[i][j]);
  }
}

console.log(twoDArr[1][0]);
