/**
 * @param {number[]} nums
 * @return {number}
 */

// take the max value of current profit, plus the ith house or i + 1th house
var rob = function(nums) {
    const memo = {};
    
    const robFrom = function(i) {
        if (i >= nums.length) return 0;
        
        if (i in memo) return memo[i];
        
        let res = Math.max(robFrom(i + 1), robFrom(i + 2) + nums[i]);
        
        memo[i] = res;
        return res;
    }
    
    return robFrom(0);
};