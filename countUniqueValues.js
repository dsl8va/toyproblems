/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1, 1, 1, 2]) // 2
countUniqueValues([-2, -1, -1, 0, 1]) // 4

Time complexity O(n)
Space complexity O(n)

Try to do it in constant space O(1) and O(n) time
*/

function countUniqueValues(array) {
  /*
  I: sorted array
  O: number of unique values in the array
  */

  // if array is empty return 0
  if (array.length === 0) return 0;
  // if array length is 1 return 1
  if (array.length === 1) return 1;
  // set a counter variable = 1
  let counter = 1;
  // set an index variable
  let index = 0;
  // while left < array[array.length-1]
  while(index < array.length-1) {
    if (array[index] === array[index+1]) {
      index++
    } else {
      counter++
      index++
    }
  }

  return counter;
}

console.log(countUniqueValues([-2, -1, -1, 0, 1]))

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}