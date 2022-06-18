/**
 * @param {number} n
 * @return {number}
 */

const memo = {};

var climbStairs = function(n) {
    // recurrence relation - dp(n) = dp(n - 1) + dp(n - 2)
    // base case
    // function or data structure to caluclate or contain the answer at n
    
    if (n < 3) return n;
    
    if ( !(n in memo) ) {
        memo[n] = climbStairs(n - 1) + climbStairs(n - 2);
    }
    
    return memo[n];
};