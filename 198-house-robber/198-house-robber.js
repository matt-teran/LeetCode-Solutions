/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp = Array(nums.length + 2).fill(0);
    // [ 0, 0, 9, 9, 10, 0, 0 ]
    for (let i = nums.length - 1; i > -1; i--) {
        dp[i] = Math.max(nums[i] + dp[i + 2], dp[i + 1]);
    }
    return dp[0];
    // console.log(dp);
//     const memo = {};
//     const dp = (i) => {
//         if (i > nums.length - 1) return 0;
        
//         if (!(i in memo)) {
//             memo[i] = Math.max(nums[i] + dp(i+2), dp(i+1));
//         }
        
//         return memo[i];
//     };
    
//     return dp(0); 
};