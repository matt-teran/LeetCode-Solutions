/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = [];

    nums.forEach((num, i) => {
        result.push(num + (result[i - 1] || 0));
    })
    return result;
};