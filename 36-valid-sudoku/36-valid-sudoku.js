/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = [];
    const cols = [];
    const sqrs = [];
    
    for (let i = 0; i < 9; i++) {
        rows.push(new Set());
        cols.push(new Set());
        sqrs.push(new Set());
    }
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = board[r][c];
            const i = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            
            if (val === '.') continue;
            
            if (rows[r].has(val) ||
                cols[c].has(val) ||
                sqrs[i].has(val)) return false;
            
            rows[r].add(val);
            cols[c].add(val);
            sqrs[i].add(val);
        }
    }
    return true;
};
// 0,0 - 0,3 - 0,6
// 3,0 - 3,3 - 3,6
// 6,0 - 6,3 - 6,6