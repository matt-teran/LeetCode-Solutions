/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    const board = [];
    for (let i = 0; i < n; i++) board.push(Array(n).fill(0));
    
    const backtrack = (row, count) => {
        for (let c = 0; c < n; c++) {
            if (isNotUnderAttack(row,c)) {
                placeQueen(row,c);
                if (row+1 === n) {
                    count++;
                } else {
                    count = backtrack(row+1, count);
                }
                removeQueen(row,c);
            }
        }
        return count;
    }
    const placeQueen = (r,c) => board[r][c] = 1;
    const removeQueen = (r,c) => board[r][c] = 0;
    
    const isNotUnderAttack = (row, col) => {
        const dfs = (r,c,dr,dc) => {
            r+=dr;
            c+=dc;
            if (r < 0 || r === n ||
               c < 0 || c === n) return true;
            if (board[r][c] === 1) return false
            
            return dfs(r, c, dr, dc)
        }
        return dfs(row,col,1,0) && dfs(row,col,-1,0) &&
            dfs(row,col,0,1) && dfs(row,col,0,-1) &&
            dfs(row,col,1,1) && dfs(row,col,-1,1) &&
            dfs(row,col,1,-1) && dfs(row,col,-1,-1);
    }
    
    return backtrack(0, 0);
};