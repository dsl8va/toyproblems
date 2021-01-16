/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0
*/

// var reverse = function(x) {
//     let neg = false;
//     if (x < 0) neg = true;
//     let string = Math.abs(x).toString();
//     let rev = string.split('').reverse().join('');
//     neg ? rev = parseInt(rev) * -1 : rev = parseInt(rev);
//     if (rev > (Math.pow(2, 31) - 1) || rev < Math.pow(-2, 31)) {
//       return 0;
//     } else {
//       return rev;
//     }
// };
// Runtime: 108 ms, faster than 25.16% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 40.5 MB, less than 28.56% of JavaScript online submissions for Reverse Integer.

var reverse = function(x) {
  let neg;
  let num = 0;
  x < 0 ? neg = true : neg = false;
  x = Math.abs(x);
  let places = Math.floor(Math.log10(x));
  while (places >= 0) {
    let newSum = (x % 10) * (Math.pow(10, places))
    num += newSum;
    places --;
    x = Math.floor(x / 10)
  }
  if (num > (Math.pow(2, 31) - 1) || num < Math.pow(-2, 31)) {
      return 0;
    } else {
      return neg ? -num : num;
    }
};
Runtime: 108 ms, faster than 25.16% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40.2 MB, less than 49.78% of JavaScript online submissions for Reverse Integer.