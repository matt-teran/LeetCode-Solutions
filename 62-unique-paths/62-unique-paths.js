/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var factorialize = function (num) {
    var result = 1;
    for (var i = 2; i <= num; i++) result *= i;
    return result;
}

var uniquePaths = function(m, n) {
    return factorialize(m+n-2)/(factorialize(m-1) * factorialize(n-1));
    
//     const dp = [];
//     for (let i = 0; i <= m; i++) {
//         dp.push(new Array(n+1).fill(1));
//     }
//     dp[m-1][n-1] = 1;
    
//     for (let r = m-2; r >= 0; r--) {
//         for (let c = n - 2; c >= 0; c--){
//             dp[r][c] = dp[r+1][c] + dp[r][c+1];
//         }
//     }

//     return dp[0][0];
};