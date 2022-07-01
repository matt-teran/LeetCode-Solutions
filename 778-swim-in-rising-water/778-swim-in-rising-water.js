/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    // if (n === 1) return 0
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const visited = new Set();
    const heap = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    heap.enqueue([grid[0][0],0,0]);
    visited.add('0'+'#'+'0');
    
    while (heap.size()) {
        const [elevation, row, col] = heap.dequeue();
        if (row === n - 1 && col === n - 1) return elevation;
        visited.add(row+'#'+col);
        
        for (let [dr,dc] of DIR) {
            const [r,c] = [row+dr,col+dc];
            
            if (grid?.[r]?.[c] !== undefined &&
                !visited.has(r+'#'+c)) {
                let newElevation = Math.max(elevation, grid[r][c]);
                grid[r][c] = newElevation;
                heap.enqueue([newElevation, r, c]);
            }
        }
    }
};