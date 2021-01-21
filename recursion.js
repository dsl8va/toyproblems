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