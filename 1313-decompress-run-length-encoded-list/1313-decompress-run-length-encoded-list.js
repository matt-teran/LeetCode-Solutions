/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i += 2) {
        // result.push(...nums[i + 1].repeat(nums[i]));
        let j = 0;
        while (j < nums[i]) {
            result.push(nums[i + 1]);
            j++;
        }
    }
    return result;
};