/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let result = 0;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const q = [];
    const bfs = (row, col) => {
        q.push([row, col]);
        
        while (q.length) {
            let [r, c] = q.shift();
            
            for (const [dr, dc] of DIR) {
                let [nr, nc] = [dr + r, dc + c];
                
                if (grid?.[nr]?.[nc] === "1") {
                    grid[nr][nc] = '2';
                    q.push([nr, nc]);
                }
            }
        }
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === '1') {
                grid[r][c] = '2';
                result++;
                bfs(r, c);
            }
        }
    }
    
    return result;
};