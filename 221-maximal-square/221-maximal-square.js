/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const R = matrix.length;
    const C = matrix[0].length;
    const dp = [];
    for (let r = 0; r <= R; r++) {
        dp.push(Array(C+1).fill(0));
    }
    let result = 0;
    for (let r = R - 1; r > -1; r--) {
        for (let c = C - 1; c > -1; c--) {
            if (matrix[r][c] === '1') {
                dp[r][c] = 1 + Math.min(dp[r+1][c], dp[r][c+1], dp[r+1][c+1]);
                result = Math.max(result, dp[r][c]);
            }
        }
    }
    return result ** 2;
};