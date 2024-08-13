// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap arr[j] and arr[j+1]
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Example usage:
let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(array1)); // Logs: [11, 12, 22, 25, 34, 64, 90]
// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    // Swap arr[i] and arr[minIdx]
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

// Example usage:
let array2 = [29, 10, 14, 37, 13];
console.log(selectionSort(array2)); // Logs: [10, 13, 14, 29, 37]
// Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage:
let array3 = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(array3)); // Logs: [1, 1, 2, 3, 6, 8, 10]
// Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1; // Target not found
}

// Example usage:
let array4 = [10, 20, 30, 40, 50];
console.log(linearSearch(array4, 30)); // Logs: 2
console.log(linearSearch(array4, 100)); // Logs: -1
// Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage:
let array5 = [2, 3, 4, 10, 40];
console.log(binarySearch(array5, 10)); // Logs: 3
console.log(binarySearch(array5, 5)); // Logs: -1
// Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.

function countCharacterOccurrences(str) {
  let counts = {};
  for (let char of str) {
    counts[char] = counts[char] + 1 || 1;
  }
  return counts;
}

// Example usage:
let string1 = "hello world";
console.log(countCharacterOccurrences(string1));
// Logs: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeatingCharacters(str) {
  let maxLength = 0;
  let start = 0;
  let charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    let char = str[end];
    if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
      start = charIndexMap[char] + 1;
    }
    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

// Example usage:
let string2 = "abcabcbb";
console.log(longestSubstringWithoutRepeatingCharacters(string2)); // Logs: 3
let string3 = "bbbbb";
console.log(longestSubstringWithoutRepeatingCharacters(string3)); // Logs: 1
// Task 8: Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
  k = k % arr.length; // In case k is greater than array length
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}

// Example usage:
let array6 = [1, 2, 3, 4, 5, 6, 7];
console.log(rotateArray(array6, 3)); // Logs: [5, 6, 7, 1, 2, 3, 4]
// Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage:
let array7 = [1, 3, 5, 7];
let array8 = [2, 4, 6, 8];
console.log(mergeSortedArrays(array7, array8)); // Logs: [1, 2, 3, 4, 5, 6, 7, 8]
