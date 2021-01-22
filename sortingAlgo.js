
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

bubbleSort([5,3,6,1])

function selectionSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    swap(arr, i, lowest)
  }
  return arr
}
debugger;
selectionSort([5,3,6,1])