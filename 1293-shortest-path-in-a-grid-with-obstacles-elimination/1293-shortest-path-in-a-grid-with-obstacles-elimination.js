/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(grid, k) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const target = [ROWS-1,COLS-1];
    const visited = new Set();
    const q = [];
    
    let initialState = [0,0,k];
    q.push([0, initialState]);
    visited.add(initialState.join('#'));
    
    while (q.length) {
        let [steps, [row,col,remaining]] = q.shift();
        
        if (row === target[0] && col === target[1]) return steps;
        
        for (let [dr, dc] of DIR) {
            let [r,c] = [row+dr,col+dc];
            
            if (grid?.[r]?.[c] > -1) {
                let newRemaining = remaining - grid[r][c];
                let newState = [r,c,newRemaining];
                if (newRemaining >= 0 && !visited.has(newState.join('#'))) {
                    q.push([steps+1, newState]);
                    visited.add(newState.join('#'));
                }
            }
        }
    }
    
    return -1;
};