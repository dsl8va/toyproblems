var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    nums.sort((a,b) => a-b);
    let idx = 0;
    let missing;
    while (idx < nums.length) {
        let current = nums[idx];
        let next = nums[idx+1];
        if (current !== next) return missing = current;
        idx+=2;
    }
    return missing;
};

/*
Runtime: 100 ms, faster than 45.10% of JavaScript online submissions for Single Number.
Memory Usage: 41.3 MB, less than 66.55% of JavaScript online submissions for Single Number.
*/