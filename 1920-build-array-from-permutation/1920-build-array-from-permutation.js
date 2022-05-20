/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [0];
    
    return nums.map(val => nums[val]);
};