/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let current = nums[0];
    let max = nums[0];
    
    for (const num of nums.slice(1)) {
        current = Math.max(num, current + num);
        max = Math.max(max, current);
    }
    return max;
};