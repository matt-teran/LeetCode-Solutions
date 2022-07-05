/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [];
    let suffix = [];
    
    for (let i = 0; i < nums.length; i++) {
        let product = (prefix[i-1] ?? 1) * (nums[i-1] ?? 1); // 0, 1, 3, 6, 
        prefix.push(product);
    }
    for (let i = nums.length - 1; i > -1; i--) {
        let product = (suffix[0] ?? 1) * (nums[i + 1] ?? 1);
        suffix.unshift(product);
    }
    return prefix.map((pre, i) => pre * suffix[i]);
};

// 1, 2, 3, 4
// 1, 1, 2, 6
// 24, 12, 4, 1