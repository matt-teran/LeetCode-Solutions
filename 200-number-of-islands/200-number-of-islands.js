/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) return 0;
    
    let visited = new Set();
    
    let rows = grid.length;
    let cols = grid[0].length;
    
    let islands = 0;
    
    const bfs = (row, col) => {
        let q = [[row, col]];
        visited.add(`r${row}c${col}`)
        
        while (q.length) {
            [row, col] = q.shift();
            const directions = [[1, 0], [-1, 0], [0,1], [0,-1]];
            for (let [dr, dc] of directions) {
                let [r, c] = [row + dr, col + dc];
                
                if (0 <= r && r < rows &&
                   0 <= c && c < cols &&
                   grid[r][c] === '1' &&
                   !visited.has(`r${r}c${c}`)) {
                    visited.add(`r${r}c${c}`);
                    q.push([r, c]);
                }
            }
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1' && !visited.has(`r${r}c${c}`)) {
                bfs(r, c);
                islands++;
            }
        }
    }
    
    return islands;
};