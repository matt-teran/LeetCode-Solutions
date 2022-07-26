/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    let maxArea = 0;
    
    const bfs = (row, col) => {
        let A = 0;
        
        const q = [[row, col]];
        
        while (q.length) {
            A++;
            
            let [r, c] = q.shift();
            
            for (const [dr, dc] of DIR) {
                const [nr, nc] = [r + dr, c + dc];
                
                if (grid?.[nr]?.[nc] === 1) {
                    grid[nr][nc] = '#';
                    q.push([nr, nc]);
                }
            }
        }
        maxArea = Math.max(A, maxArea);
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
                grid[r][c] = '#';
                bfs(r,c);
            }
        }
    }
    
    return maxArea;
};