/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const target = [ROWS - 1, COLS - 1];
    if (k >= ROWS + COLS - 2) return ROWS + COLS - 2;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    let state = [0,0,k];
    const q = [[0,state]];
    const seen = new Set();
    seen.add(state.join('#'))
    
    while (q.length) {
        let [steps, st] = q.shift();
        let [row,col,e] = st;
        if (row === target[0] && col === target[1]) return steps;
        for (let [dr,dc] of DIR) {
            let [r,c] = [row+dr,col+dc];
            if (grid?.[r]?.[c] > -1) {
                let newElim = e - grid[r][c];
                let newState = [r,c,newElim];
                if (newElim >= 0 && !seen.has(newState.join('#'))) {
                    seen.add(newState.join('#'));
                    q.push([steps+1, newState]);
                }
            }
        }
    }
    return -1;
};