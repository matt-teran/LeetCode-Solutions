/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const N = board.length;
    const rows = Array(N).fill(0); // 0 => 0 |= (1 << 5)
    const cols = Array(N).fill(0);
    const sqrs = Array(N).fill(0);
    
    for (let r = 0; r < N; r++) {
        for (let c = 0; c < N; c++) {
            const val = board[r][c];
            const i = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (val === '.') continue;
            
            if (rows[r] & (1 << val) ||
                cols[c] & (1 << val) ||
                sqrs[i] & (1 << val)) return false;
            rows[r] |= 1 << val;
            cols[c] |= 1 << val;
            sqrs[i] |= 1 << val;
        }
    }
    return true;
};
