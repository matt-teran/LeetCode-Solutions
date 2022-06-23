/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if (nums.length === 1) return true;
    const dp = new Array(nums.length).fill(false);
    dp[nums.length - 1] = true;
    
    for (let i = nums.length - 2; i > -1; i--) {
        for (let j = i+1; j <= i+nums[i]; j++) {
            if (dp[j]) {
                dp[i] = true;
                break;
            }
        }
    }
    
    return dp[0];
};


// base case
// i === nums.length - 1

// function
// dp(0) => bool

// rr

// state variables
// • index of nums
