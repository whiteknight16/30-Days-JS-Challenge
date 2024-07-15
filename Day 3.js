// Activity 1
const checkPositiveNegativeOrZero = (n) => {
  return n > 0 ? "Positive" : n != 0 ? "Negative" : "Zero";
};

const isEleigibleToVote = (age) => {
  if (age >= 18) return "YES";
  else return "NO";
};

console.log(checkPositiveNegativeOrZero(30));
console.log(isEleigibleToVote(25));

// Activity 2
const largestOfThree = (a, b, c) => {
  if (a > b) {
    if (a > c) return a;
    else return c;
  } else if (b > a) {
    if (b > c) return b;
    else return c;
  } else return c;
};

console.log(largestOfThree(2, 3, 1));

// Activity 3
function dayChecker(day) {
  switch (day) {
    case 1:
      return "Sunday";
    case 2:
      return "Monday";
    case 3:
      return "Tuesday";
    case 4:
      return "Wednesday";
    case 5:
      return "Thursday";
    case 6:
      return "Friday";
    case 7:
      return "Saturday";

    default:
      return "Enter a valid Number";
  }
}
console.log(dayChecker(5));
function scoreChecker(score) {
  switch (score) {
    case score > 90:
      return "A";
    case score > 80:
      return "B";
    case score > 70:
      return "C";
    case score > 30:
      return "D";
    case score < 30:
      return "F";
    default:
      return "Enter a valid score";
  }
}
console.log(scoreChecker(120));

// Activity 4
function evenOrOdd(n) {
  return n & 1 ? "Odd" : "Even";
}

console.log(evenOrOdd(5));

// Activity 5
function leapOrNot(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
    ? "Leap"
    : "Not Leap";
}

console.log(leapOrNot(1996));
