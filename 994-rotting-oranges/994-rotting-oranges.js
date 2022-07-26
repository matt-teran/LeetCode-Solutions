/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const q = [];
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 2) q.push([r,c]);
        }
    }

    let minutes = 0;
    
    while (q.length) {
        let increment = false;
        for (let i = q.length; i > 0; i--) {
            const [row, col] = q.shift();
            for (const [dr, dc] of DIR) {
                let [r,c] = [row + dr, col + dc];
                
                if (grid?.[r]?.[c] === 1) {
                    increment = true;
                    grid[r][c] = 2;
                    q.push([r,c]);
                }
            }
        }
        if (increment) minutes++;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) return -1;
        }
    }
    return minutes;
};