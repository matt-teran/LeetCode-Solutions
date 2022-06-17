/**
 * @param {number[]} nums
 * @return {number}
 */

// take the max value of current profit, plus the ith house or i + 1th house
var rob = function(nums) {
    if (!nums.length) return 0;
    // DP table
    let maxes = new Array(nums.length + 1).fill(null);
    // base case initialization
    // nums[nums.length] = 0, maxes[nums.length - 1] = nums[nums.length - 1];
    nums.push(0);
    
    // DP table calculations
    for (let i = nums.length - 3; i > -1; i--){
        nums[i] = Math.max(nums[i+1], nums[i+2] + nums[i]);
    }
    return nums[0];
};