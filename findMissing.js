var findDisappearedNumbers = function(nums) {

    let obj = {};
    let results = [];

    nums.forEach(num => {
        if (obj[num] === undefined) obj[num] = true;
    })
    for (var i = 1; i <= nums.length; i++) {
      if (obj[i] === undefined) results.push(i)
    }
    return results;
};
debugger;
findDisappearedNumbers([4,3,2,7,8,2,3,1])

/*
Runtime: 128 ms, faster than 54.82% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
Memory Usage: 50.1 MB, less than 21.44% of JavaScript online submissions for Find All Numbers Disappeared in an Array.
*/