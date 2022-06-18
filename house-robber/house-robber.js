/**
 * @param {number[]} nums
 * @return {number}
 */
const memo = {};
//function
var rob = function(nums) {
    // recurrence relation
    
    const dp = Array(nums.length + 1);
    
    // base case
    // if (i === 0) return nums[0];
    // if (i === 1) return Math.max(nums[0], nums[1]);
    // recurrence relation
    // if ( !(i in memo) ) memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
    
    for (let i = 0; i < dp.length; i++) {
        if (i === 0) {
            dp[i] = nums[0]
        } else if (i === 1) {
            dp[i] = Math.max(nums[0], nums[1])
        } else {
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }
    }
        
    return dp[nums.length - 1];
};

// [2,7,9,3,1]
// [2,7,9,3]
// [2,7,9]
// [2,7]
// [2]