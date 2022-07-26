/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const ROWS = board.length;
    const COLS = board[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const bfs = (cell) => {
        const q = [cell];
        
        while (q.length) {
            const [row, col] = q.shift();
            
            for (const [dr, dc] of DIR) {
                const [r, c] = [row + dr, col + dc];
                
                if (board?.[r]?.[c] === 'O') {
                    board[r][c] = 'T';
                    q.push([r, c]);
                }
            }
        }
    };
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === 'O' && (r === 0 || r === ROWS - 1 ||
               c === 0 || c === COLS - 1)) {
                board[r][c] = 'T';
                bfs([r, c]);
            }
        }
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X';
            } else if (board[r][c] === 'T') {
                board[r][c] = 'O';
            }
        }
    }
    
    return board;
};