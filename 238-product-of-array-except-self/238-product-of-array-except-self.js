/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const N = nums.length;
    let prefix = Array(N).fill(0);
    let suffix = Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        prefix[i] = (prefix[i - 1] ?? 1) * (nums[i - 1] ?? 1); 
        suffix[N - 1 - i] = (suffix[N - 1 - i + 1] ?? 1) * (nums[N - 1 - i + 1] ?? 1);
    }
    
    return prefix.map((pre, i) => pre * suffix[i]);
};

// 1, 2, 3, 4
// 1, 1, 2, 6
// 1, 1, 1, 1