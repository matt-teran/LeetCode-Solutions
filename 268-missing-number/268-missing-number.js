/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num ^= i;
        num ^= nums[i];
    }
    return num ^ nums.length;
};

// 0, 1, 2, 3
