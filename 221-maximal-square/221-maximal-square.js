/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    const R = matrix.length;
    const C = matrix[0].length;
    const memo = {};
    
    const dp = (r, c) => {
        if (r === R || c === C) return 0;
        if (matrix[r][c] === '0') return 0;
        
        if (!(r in memo)) memo[r] = {};
        if (!(c in memo[r])) {
            memo[r][c] = 1 + Math.min(dp(r+1,c), dp(r,c+1), dp(r+1,c+1));
        }
        return memo[r][c];
    };
    let result = 0;
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            result = Math.max(result, dp(r,c));
        }
    }
    return result ** 2;
};