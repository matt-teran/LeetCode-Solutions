/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = [];
    const cols = [];
    const sqrs = [];
    
    for (let i = 0; i < 9; i++) {
        rows.push(Array(9).fill(0));
        cols.push(Array(9).fill(0));
        sqrs.push(Array(9).fill(0));
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            const i = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (val === '.') continue;
            
            if (rows[r][val - 1] === 1) return false;
            if (cols[c][val - 1] === 1) return false;
            if (sqrs[i][val - 1] === 1) return false;
            
            rows[r][val - 1] = 1;
            cols[c][val - 1] = 1;
            sqrs[i][val - 1] = 1;
        }
    }
    return true;
};
// 0,0 - 0,3 - 0,6
// 3,0 - 3,3 - 3,6
// 6,0 - 6,3 - 6,6