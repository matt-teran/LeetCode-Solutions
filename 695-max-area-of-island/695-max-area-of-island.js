/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    if (!grid.length) return 0;
    let result = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = new Set();
    
    const bfs = (row, col) => {
        visited.add(`r${row}c${col}`);
        let q = [[row, col]];
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        let count = 1;
        while (q.length) {
            [row, col] = q.shift();
            for (let [dRow, dCol] of directions) {
                let r = row + dRow;
                let c = col + dCol;
                
                if (0 <= r && r < rows &&
                   0 <= c && c < cols &&
                   grid[r][c] === 1 &&
                   !visited.has(`r${r}c${c}`)){
                    q.push([r, c]);
                    visited.add(`r${r}c${c}`);
                    count++;
                }
                    
            }
        }
        return count;
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1 && !visited.has(`r${r}c${c}`)) {
                result = Math.max(result, bfs(r, c));
            }
        }
    }
    return result;
};