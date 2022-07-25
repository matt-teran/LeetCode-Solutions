/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const DIR = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const backtrack = (row, col, i) => {
        if (i === word.length) return true;
        const q = [[row, col]];
        
        while (q.length) {
            let [r, c] = q.shift();
            
            for (let [dr, dc] of DIR) {
                let [nr, nc] = [r + dr, c + dc];
                if (board?.[nr]?.[nc] === word[i]) {
                    board[nr][nc] = '#';
                    if (backtrack(nr, nc, i+1)) return true;
                    board[nr][nc] = word[i];
                }
            }
        }
        return false;
        
    }
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c] === word[0]) {
                board[r][c] = '#';
                if (backtrack(r, c, 1)) return true;
                board[r][c] = word[0];
            }
        }
    }
    
    return false;
};