/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = {};
    
    const dp = (i, j) => {
        
        if (i > m || j > n) return 0;
        if (i === m-1 && j === n-1)return 1;
        
        if ( !(i in memo) ) memo[i] = {};
        if ( !(j in memo[i]) ) {
            memo[i][j] = dp(i + 1, j) + dp(i, j + 1);
        }
        return memo[i][j]
    }
    
    return dp(0, 0);
};