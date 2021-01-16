function validAnagram(string1, string2){

  if (string1.length !== string2.length) return false;

  let str1 = {};
  let str2 = {};

  for (let letter of string1) {
      str1[letter] = (str1[letter] || 0) + 1;
  }
  for (let letter of string2) {
      str2[letter] = (str2[letter] || 0) + 1;
  }
  debugger;
  console.log('1', str1)
  console.log('2', str2)
  for (let key in str1) {
      if (str1[key] !== str2[key]) {
          return false;
      }
  }
  return true;
}

console.log(validAnagram('aac', 'caa'))