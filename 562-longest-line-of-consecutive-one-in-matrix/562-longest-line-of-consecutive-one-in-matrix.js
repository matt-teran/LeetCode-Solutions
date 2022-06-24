/**
 * @param {number[][]} mat
 * @return {number}
 */
var longestLine = function(mat) {
    const visited = new Set();
    const ROWS = mat.length;
    const COLS = mat[0].length;
    let max = 0;
    const dfs = (row, col, count, dr, dc) => {
        if (!mat[row] || !mat[row][col] || mat[row][col]===0) return count;
        
        visited.add(`r${row}c${col}`);
        return dfs(row+dr,col+dc,count+1, dr, dc)
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (mat[r][c] === 1) {
                max = Math.max(dfs(r, c, 0, 1, 0),
                               dfs(r, c, 0, 0, 1),
                               dfs(r, c, 0, 1, 1),
                               dfs(r, c, 0, 1, -1), 
                               max);
            }
        }
    }
    
    return max;
};