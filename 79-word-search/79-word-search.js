/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const DIR = [[1, 0], [-1, 0], [0, -1], [0, 1]];
    const backtrack = (row, col, i) => {
        if (i === word.length) return true;
        
        for (const [dr, dc] of DIR) {
            const [r, c] = [row + dr, col + dc];
            
            if (board?.[r]?.[c] === word[i]) {
                board[r][c] = '#';
                if (backtrack(r, c, i+1)) return true;
                board[r][c] = word[i];
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