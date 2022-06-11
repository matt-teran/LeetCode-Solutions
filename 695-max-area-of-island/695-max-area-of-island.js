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
    
    const dfs = (r, c) => {
        if (r < 0 || r === rows ||
           c < 0 || c === cols ||
           grid[r][c] === 0 ||
           visited.has(`r${r}c${c}`)) {
            return 0;
        }
        visited.add(`r${r}c${c}`);
        return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) {
                result = Math.max(result, dfs(r, c));
            }
        }
    }
    
    return result;
};