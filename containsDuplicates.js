var containsDuplicate = function(nums) {
    if (nums.length < 2) return false;
    let storage = {};
    let duplicate = false;
    nums.forEach(num => {
        if (storage[num] === undefined) {
            storage[num] = num;
        } else {
            return duplicate = true;
        }
    })
    return duplicate;
};

debugger;
containsDuplicate([3, 3])

/*
Runtime: 88 ms, faster than 74.04% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 46.6 MB, less than 27.14% of JavaScript online submissions for Contains Duplicate.
*/

var containsDuplicate = function(nums) {
    if (nums.length < 2) return false;

    nums.sort((a,b) => a-b)

    let duplicate = false;

    let first = 0;
    let last = nums.length-1;
    while (first < last) {
        let start1 = nums[first];
        let start2 = nums[first+1];
        let end1 = nums[last];
        let end2 = nums[last-1];
        if (start1 === start2 || end1 === end2) return duplicate = true;
        first++;
        last--;
    }
    return duplicate;
};
/*
Runtime: 88 ms, faster than 74.04% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 41.1 MB, less than 87.96% of JavaScript online submissions for Contains Duplicate.
*/