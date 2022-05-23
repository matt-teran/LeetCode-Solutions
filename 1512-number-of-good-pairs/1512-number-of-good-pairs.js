/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let result = 0;
    nums.forEach((num, i) => {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] === num) result++;
        }
    })
    return result;
};