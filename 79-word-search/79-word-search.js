/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    
    // const visited = new Set();
    
    const dfs = (r, c, i, visited) => {
        if (i === word.length) return true;
        if (r < 0 || r >= ROWS ||
           c < 0 || c >= COLS ||
            visited.has(`r${r}c${c}`) ||
           board[r][c] !== word[i]) return false;
        visited.add(`r${r}c${c}`)
        // console.log(visited);
        const ans = (i+1 === word.length || dfs(r+1,c,i+1,visited) || dfs(r-1,c,i+1,visited) ||
           dfs(r,c+1,i+1,visited) || dfs(r,c-1,i+1,visited))
        visited.delete(`r${r}c${c}`);
        return ans;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            // visited.clear();
            if (board[r][c] === word[0] && dfs(r, c, 0, new Set())) return true;
        }
    }
    
    return false;
};