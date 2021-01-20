function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    /*
  Input: an array of N integers
  Output: array of N objects
    */

    // create some object class with a value method and value
    // for each integer in the input array, create a new object and store in a new array
    // return that array

    var obj = function(val) {
      this.val = val;
    }
    obj.prototype.value = function() {
      return this.val;
    }

    const result = [];
    A.forEach(num => {
      var newObj = new obj(num)
      result.push(newObj)
    })
    return result;
}

let eg = solution([-3, 0, 8, 2, -92, 8293])
console.log(eg[0].value())
console.log(eg[1].value())
console.log(eg[2].value())
console.log(eg[3].value())
console.log(eg[4].value())
