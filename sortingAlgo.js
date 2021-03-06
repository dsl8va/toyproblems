
function swap(arr, ind1, ind2) {
  let temp = arr[ind1];
  arr[ind1] = arr[ind2];
  arr[ind2] = temp;
  return arr;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

// bubbleSort([5,3,6,1])

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (lowest !== i) swap(arr, i, lowest);
  }
  return arr
}
// debugger;
// selectionSort([5,3,6,1])

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let pointer = i + 1;
    if (arr[pointer] < arr[i]) {
      for (let j = i; j >= 0; j--) {
        if (arr[pointer] < arr[j]) {
        swap(arr, j, pointer)
        pointer--;
        console.log(arr)
        }
      }
    }
  }
  return arr;
}

// insertionSort([5,3,6,2,1])

function combine(arr1, arr2) {
  let arr = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr.push(arr1[i]);
      i++;
    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++
  }
  return arr;
}
// combine([1,3,5], [2,4,6])

function mergeSort(arr) {
   if (arr.length <= 1) return arr;

   let mid = Math.floor(arr.length/2);
   let left = mergeSort(arr.slice(0, mid));
   let right = mergeSort(arr.slice(mid));
   return combine(left, right);

}

// console.log(mergeSort([5,2,6,1,4,7]))

function pivot(arr, start=0, end=arr.length) {
  let pivot = arr[start];
  let count = start;
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      let temp = arr[count];
      arr[count] = arr[i];
      arr[i] = temp;
      count++;
    }
  }
  let temp = arr[count];
  arr[count] = pivot;
  pivot = temp;
  // console.log(arr);
  return count;
}

// console.log(pivot([5,2,6,1,4,7], 0, 6))

function quickSort(arr, left=0, right=arr.length) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    // left
    quickSort(arr, left, pivotIndex-1);
    // right
    quickSort(arr, pivotIndex+1, right)
  }
  return arr;
}

// console.log(quickSort([5,2,7,1,4,6]))

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(num)) + 1;
}

function mostDigits(arr) {
  let most = 0;
  arr.forEach(num => {
    most = Math.max(most, digitCount(num))
  })
  return most;
}

function radixSort(arr) {
  let max = mostDigits(arr);
  for (let i = 0; i < max; i++) {
    let buckets = Array.from({length: 10}, () => []);
    for (let j = 0; j < arr.length; j++) {
      let num = arr[j];
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([54, 342, 53, 1, 3456, 853, 12, 97]))