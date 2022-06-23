/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = {};
    
    const dp = [];
    for (let i = 0; i <= m; i++) {
        dp.push(new Array(n+1).fill(1));
    }
    dp[m-1][n-1] = 1;
    
    for (let r = m-2; r >= 0; r--) {
        for (let c = n - 2; c >= 0; c--){
            dp[r][c] = dp[r+1][c] + dp[r][c+1];
        }
    }
    // console.log(dp[0][0]);
    return dp[0][0];
    
//     const dp = (i, j) => {
        
//         if (i > m || j > n) return 0;
//         if (i === m-1 && j === n-1)return 1;
        
//         if ( !memo.hasOwnProperty(i) ) memo[i] = {};
//         if ( !(j in memo[i]) ) {
//             memo[i][j] = dp(i + 1, j) + dp(i, j + 1);
//         }
//         return memo[i][j]
//     }
    
//     return dp(0, 0);
};