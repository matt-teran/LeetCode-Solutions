/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    const memo = {};
    
    const dp = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;
        if (n === 2) return 1
        if ( !(n in memo) ) {
            memo[n] = dp(n - 3) + dp(n - 2) + dp(n - 1);
        }
        return memo[n];
    }
    
    return dp(n);
};