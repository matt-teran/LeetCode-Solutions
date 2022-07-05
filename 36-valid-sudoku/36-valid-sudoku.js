/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const map = {
            0: [0,0],
            1: [0,3],
            2: [0,6],
            3: [3,0],
            4: [3,3],
            5: [3,6],
            6: [6,0],
            7: [6,3],
            8: [6,6]
    }
    const R = board.length;
    const C = board[0].length;
    // Checks all columns in row i for dups
    const checkRow = (r) => {
        let row = board[r];
        const seen = new Set();
        for (const cell of row) {
            if (cell !== '.' && seen.has(cell)) return false;
            seen.add(cell);
        }
        return true;
    }
    // Checks all rows in column i for dups
    const checkCol = (c) => {
        const seen = new Set();
        for (let r = 0; r < 9; r++) {
            if (board[r][c] !== '.' && seen.has(board[r][c])) return false;
            seen.add(board[r][c]);
        }
        return true;
    }
    // Checks all cells in square i for dups
    const checkSq = (i) => {
        const [ROW, COL] = map[i];
        const seen = new Set();
        for (let r = ROW; r < ROW + 3; r++) {
            for (let c = COL; c < COL + 3; c++) {
                if (board[r][c] !== '.' && seen.has(board[r][c])) return false;
                seen.add(board[r][c]);
            }
        }
        return true;
    }
    
    for (let i = 0; i < 9; i++) {
        if (!checkRow(i) || !checkCol(i) || !checkSq(i)) return false;
    }
    return true;
};
// 0,0 - 0,3 - 0,6
// 3,0 - 3,3 - 3,6
// 6,0 - 6,3 - 6,6