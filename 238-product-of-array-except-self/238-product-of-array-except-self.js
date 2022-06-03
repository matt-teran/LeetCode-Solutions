/**
 * @param {number[]} nums
 * @return {number[]}
 */
// inputs: array of integers
// output: array of integers
// constraints: array length > 1 | time complexity is O(n) | no division operator
// edge cases: na
var productExceptSelf = function(nums) {
    let result = [];
    // generate prefix and suffix arrays
    let prefix = [];
    let suffix = [];
    for (let i = 0; i < nums.length; i++) {
        // prefix.push((nums[i - 1] || 0) * prefix[i - 1] || 1);
        // suffix.unshift((nums[nums.length - i] || 0) * suffix[0] || 1);
        if (prefix.length === 0) {
            prefix.push(nums[i]);
            suffix.push(nums[nums.length - 1]);
        } else {
            prefix.push(nums[i] * prefix[i - 1])
            suffix.unshift(nums[nums.length - 1 - i] * suffix[0]);
        }
    }
    // create a new array of the sums of prefix[i] & suffx[i]
    //return array
    console.log(prefix, suffix)
    return nums.map((num, i) => {
        return (prefix[i - 1] !== undefined ? prefix[i - 1] : 1) * (suffix[i + 1] !== undefined ? suffix[i + 1] : 1)
    })
};
// [0, 1, 2, 6]
// [24, 12, 4, 0]