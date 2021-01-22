function binarySearch(arr, val){
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor((start+end)/2);
  while (start <= end) {
      if (arr[mid] === val) return mid;
      else if (val > arr[mid]) start = mid + 1;
      else end = mid - 1;
      mid = Math.floor((start+end)/2);
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5], 4))