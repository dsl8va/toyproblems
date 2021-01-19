/*
Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function hsould calculate the maximum sum of n consecutive elements in the array.

maxSubarraySum([4,2,1,6], 1) // 6
maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
*/

function maxSubarraySum(arr, num) {
  var maxSum = 0, tempSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;

  for (let j = num; j < arr.length j++) {
    tempSum = tempSum - arr[j-num] + arr[j];
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2))