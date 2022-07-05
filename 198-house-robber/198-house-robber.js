/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const memo = {};
    const dp = (i) => {
        if (i > nums.length - 1) return 0;
        
        if (!(i in memo)) {
            memo[i] = Math.max(nums[i] + dp(i+2), dp(i+1));
        }
        
        return memo[i];
    };
    
    return dp(0); 
};