/**
 * @param {number[]} nums
 * @return {number}
 */

//function
var rob = function(nums) {
    // recurrence relation
    
    const dp = (i) => {
        // base case
        if (i === 0) return nums[0];
        if (i === 1) return Math.max(nums[0], nums[1]);
        
        if ( !(i in memo) ) memo[i] = Math.max(dp(i - 1), dp(i - 2) + nums[i]);
        return memo[i];
    }
    const memo = {};
        
    return dp(nums.length - 1);
};

// [2,7,9,3,1]
// [2,7,9,3]
// [2,7,9]
// [2,7]
// [2]