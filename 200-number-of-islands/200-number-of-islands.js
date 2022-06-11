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
            let [r, c] = q.shift();
            
            for (let dir of directions) {
                let cr = r + dir[0]
                let cc = c + dir[1];
                
                if (0 <= cr && cr < rows &&
                    0 <= cc && cc < cols &&
                    grid[cr][cc] === '1' &&
                    !visited.has(JSON.stringify([cr, cc]))) {
                    q.push([cr, cc]);
                    visited.add(JSON.stringify([cr, cc]));
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
    console.log(visited)
    return islands;
};