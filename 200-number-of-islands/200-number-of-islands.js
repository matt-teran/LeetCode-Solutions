/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid.length) return 0;
    let visited = new Set();
    let [rows, cols] = [grid.length, grid[0].length];
    let islands = 0;
    
    const bfs = (row, col) => {
        let q = [[row, col]];
        visited.add(JSON.stringify([row, col]));
        
        while (q.length) {
            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            let [row, col] = q.shift();
            
            for (let [dr, dc] of directions) {
                let r = row + dr;
                let c = col + dc;
                
                if (0 <= r && r < rows &&
                    0 <= c && c < cols &&
                    grid[r][c] === '1' &&
                    !visited.has(JSON.stringify([r, c]))) {
                    q.push([r, c]);
                    visited.add(JSON.stringify([r, c]));
                }
            }
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === '1' && !visited.has(JSON.stringify([r, c]))) {
                bfs(r, c);
                islands++;
            }
        }
    }
    return islands;
};