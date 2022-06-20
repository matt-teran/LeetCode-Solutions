/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let n = nums.length;
    let m = multipliers.length;
    const memo = {};
    const dp = (i, left) => {
        if (i === m) return 0;
        let mult = multipliers[i];
        let right = n - 1 - (i - left);
        
        if ( !(i in memo) ) memo[i] = {};
        
        if ( !(left in memo[i]) ){
            memo[i][left] = Math.max(mult * nums[left] + dp(i + 1, left + 1),
                        mult * nums[right] + dp(i + 1, left));
        }
        
        return memo[i][left];
    }
    
    return dp(0, 0);
};