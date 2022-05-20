/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function(nums) {
    if (nums.length === 0) return [];
    if (nums.length === 1) return [0];
    let result = [];

    nums.forEach((value) => {
        result.push(nums[value]);
    })
    return result;
};