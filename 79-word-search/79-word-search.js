/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    
    const dfs = (r, c, i) => {
        if (i === word.length) return true;
        if (r < 0 || r >= ROWS ||
           c < 0 || c >= COLS ||
           board[r][c] !== word[i]) return false;
        board[r][c] = '#';
        const ans = (dfs(r+1,c,i+1) || dfs(r-1,c,i+1) ||
           dfs(r,c+1,i+1) || dfs(r,c-1,i+1))
        board[r][c] = word[i];
        return ans;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
        }
    }
    
    return false;
};