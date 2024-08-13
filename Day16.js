// Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function factorial(n) {
  // Base case: factorial of 0 or 1 is 1
  if (n <= 1) {
    return 1;
  }
  // Recursive case: n * factorial of (n-1)
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Logs: 120
console.log(factorial(0)); // Logs: 1
console.log(factorial(7)); // Logs: 5040
// Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function fibonacci(n) {
  // Base cases: 0th Fibonacci number is 0, 1st is 1
  if (n <= 1) {
    return n;
  }
  // Recursive case: sum of the two preceding numbers
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Logs: 8
console.log(fibonacci(0)); // Logs: 0
console.log(fibonacci(10)); // Logs: 55

// Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
  // Base case: empty array has a sum of 0
  if (arr.length === 0) {
    return 0;
  }
  // Recursive case: sum of the first element and the sum of the rest
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4, 5])); // Logs: 15
console.log(sumArray([10, 20, 30])); // Logs: 60
console.log(sumArray([])); // Logs: 0
// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArray(arr) {
  // Base case: if the array has one element, return it
  if (arr.length === 1) {
    return arr[0];
  }
  // Recursive case: compare the first element with the maximum of the rest
  const maxOfRest = maxArray(arr.slice(1));
  return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

console.log(maxArray([1, 2, 3, 4, 5])); // Logs: 5
console.log(maxArray([10, 5, 20, 15])); // Logs: 20
console.log(maxArray([-10, -20, -30])); // Logs: -10
// Task 5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
  // Base case: empty string or single character is already reversed
  if (str.length <= 1) {
    return str;
  }
  // Recursive case: reverse the rest of the string and add the first character at the end
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("hello")); // Logs: "olleh"
console.log(reverseString("abcd")); // Logs: "dcba"
console.log(reverseString("a")); // Logs: "a"
// Task 6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function isPalindrome(str) {
  // Base case: empty string or single character is a palindrome
  if (str.length <= 1) {
    return true;
  }
  // Check the first and last characters, then recurse on the middle part
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  }
  return false;
}

console.log(isPalindrome("racecar")); // Logs: true
console.log(isPalindrome("hello")); // Logs: false
console.log(isPalindrome("madam")); // Logs: true
// Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  // Base case: if the left index exceeds the right, target is not found
  if (left > right) {
    return -1;
  }
  // Find the middle index
  const mid = Math.floor((left + right) / 2);

  // Check if the middle element is the target
  if (arr[mid] === target) {
    return mid;
  }
  // If the target is less than the middle, search the left half
  if (target < arr[mid]) {
    return binarySearch(arr, target, left, mid - 1);
  }
  // Otherwise, search the right half
  return binarySearch(arr, target, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4, 5], 3)); // Logs: 2
console.log(binarySearch([10, 20, 30, 40], 25)); // Logs: -1
console.log(binarySearch([5, 6, 7, 8, 9], 7)); // Logs: 2
// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function countOccurrences(arr, target) {
  // Base case: empty array has zero occurrences
  if (arr.length === 0) {
    return 0;
  }
  // Check the first element and recurse on the rest of the array
  const countInRest = countOccurrences(arr.slice(1), target);
  return (arr[0] === target ? 1 : 0) + countInRest;
}

console.log(countOccurrences([1, 2, 3, 2, 2], 2)); // Logs: 3
console.log(countOccurrences([10, 20, 30, 40], 25)); // Logs: 0
console.log(countOccurrences([5, 5, 5, 5, 5], 5)); // Logs: 5
