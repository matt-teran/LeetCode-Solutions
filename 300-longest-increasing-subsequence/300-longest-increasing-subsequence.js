/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
    return Math.max(...dp);
};

// base case
// • i === n => 0
// recurrence relation
// dp(i) = dp(i+1) + nums[i] || dp()
// function
// • dp(i) => subsequence
// state variables
// • index of nums
// • subsequence created thus far
// • 