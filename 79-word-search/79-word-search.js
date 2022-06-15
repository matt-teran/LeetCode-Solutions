/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let visited = new Set();
    
    const find = (row, col, i) => {
        if (i === word.length) return true;
        if (row < 0 || col < 0 ||
           row >= rows || col >= cols ||
            visited.has(`r${row}c${col}`) ||
           board[row][col] !== word[i]) {
            return false;
        }
        
        visited.add(`r${row}c${col}`);
        let result = (find(row+1, col, i + 1) ||
                     find(row-1, col, i + 1) ||
                     find(row, col+1, i + 1) ||
                     find(row, col-1, i + 1))
        visited.delete(`r${row}c${col}`);
        return result;
    }
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[r].length; c++) {
            if (board[r][c] === word[0]) {
                if (find(r, c, 0, new Set())) return true;
            }
        }
    }
    return false;
};