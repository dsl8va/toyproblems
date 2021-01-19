/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

isSubsequence('hello', 'hello world'); // true
isSubsequence('abc', 'acb') // false
isSubsequence('abc', 'abracadabra') // true
*/

function isSubsequence(str1, str2) {
  // one pointer for each string
  // iterate over the second string
    // if the letter matches the one in the first string
        // increment the pointer in the first string
    // if the str1 pointer is > length
        // return true
    // else return false
    let i = 0;

    for (var letter of str2) {
      if (str1[i] === undefined) break;
        if (letter === str1[i]) {
            i++;
        }
    }
    return i = str1.length ? true : false;

}
debugger;
isSubsequence('abc', 'abracadabra')git