/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0
*/

// var lengthOfLongestSubstring = function(s) {
//   if (s === '') return 0;

//   let length = 0;
//   let substring = '';
//   for (let i = 0; i < s.length; i++) {
//     let letter = s[i];
//     if (substring.includes(letter)) {
//       if (substring.length > length) {
//         length = substring.length
//       }
//       substring = letter;
//     } else {
//       substring += letter;
//       length = substring.length;
//     }
//   }

//   return length;

// };


var lengthOfLongestSubstring = function(s) {
  if (s === '') return 0;

  let length = 0;
  let substring = '';

  for (let i = 0; i < s.length; i++) {
    if (substring.length > length) length = substring.length;
    substring = s[i];
    for (let j = i + 1; j < s.length; j++) {
      let letter = s[j];
      if (substring.includes(letter)) {
        break;
      } else {
        substring += letter;
      }
    }
  }

  return length;

};
debugger;
lengthOfLongestSubstring(' ')