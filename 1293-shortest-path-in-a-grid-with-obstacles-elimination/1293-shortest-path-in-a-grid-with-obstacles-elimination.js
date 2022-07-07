/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    if (k >= ROWS + COLS -2) return ROWS + COLS - 2;
    const initialState = [0,0,k];
    const visited = new Set();
    visited.add(initialState.join('#'));
    const q = [[0, initialState]];
    
    while (q.length) {
        const [steps, [row, col, remaining]] = q.shift();
        
        if (ROWS-1 === row && COLS-1 === col) return steps;
        
        for (const [dr, dc] of DIR) {
            const [r,c] = [row+dr, col+dc];
            if (grid?.[r]?.[c] > -1) {
                const newRemaining = remaining - grid[r][c];
                const newState = [r,c,newRemaining];
                if (newRemaining > -1 && !visited.has(newState.join('#'))) {
                    visited.add(newState.join('#'));
                    q.push([steps+1, newState]);
                }
            }
        }
    }
    return -1;
};