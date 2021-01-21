// just some recursion practice

function power(base, exp){
    if (exp === 0) return 1;
    return base * power(base, exp-1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function factorial(num){
    if (num === 0) return 1;
    return num * factorial(num-1);
}

//factorial(1) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// factorial(7) // 5040

var productOfArray = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function recursiveRange(num) {
   if (num === 0) return 0;
   return num + recursiveRange(num-1);
}

// recursiveRange(6) // 21
// recursiveRange(10) // 55

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function reverse(string){
    if (string === '') return '';
  let char = string.slice(-1);
  return char + reverse(string.slice(0, -1))
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function isPalindrome(str){
    if (str === '') return true;
  let first = str.slice(0, 1);
  let last = str.slice(-1);
  if (first === last) {
      return isPalindrome(str.slice(1, -1))
  } else {
      return false;
  }
}

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function someRecursive(arr, cb){
  if (arr.length === 0) return false;
  let num = arr[0];
  if (cb(num)) {
      return true;
  } else {
      return someRecursive(arr.slice(1), cb)
  }
}

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  }
  return newArr;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]

function capitalizeFirst (arr) {
  if (arr.length === 0) return [];
  let word = arr[0][0].toUpperCase() + arr[0].slice(1);
  return [word].concat(capitalizeFirst(arr.slice(1)))
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeWords (arr) {
  if (arr.length === 0) return [];
  let word = arr[0].toUpperCase();
  return [word].concat(capitalizeWords(arr.slice(1)));
}

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
