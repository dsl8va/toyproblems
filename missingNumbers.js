var missingNumber = function(nums) {

    nums.sort((a, b) => a-b)

    let length = nums.length;
    let missing;
    for (let i = 0; i <= length; i++) {
        if (nums[i] !== i) return missing = i;
    }
    return missing;
};
/*
Runtime: 92 ms, faster than 55.46% of JavaScript online submissions for Missing Number.
Memory Usage: 40.7 MB, less than 87.74% of JavaScript online submissions for Missing Number.
*/