/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    let rows = board.length;
    let cols = board[0].length;
    
    const dfs = (row, col) => {
        if (row < 0 || row === rows ||
           col < 0 || col === cols ||
           board[row][col] !== 'O') return;
        board[row][col] = 'T';
        
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O' &&
               (r === 0 || r === rows - 1 ||
               c === 0 || c === cols - 1)) {
                dfs(r, c);
            }
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 'O') {
                board[r][c] = 'X'
            } else if (board[r][c] === 'T') {
                board[r][c] = 'O'
            }
        }
    }
    // for (let r = 0; r < rows; r++) {
    //     for (let c = 0; c < cols; c++) {
    //         if (board[r][c] === 'T') board[r][c] = 'O';
    //     }
    // }
};