/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let minutes = 0;
    let rottenOranges = [];
    
    let rows = grid.length;
    let cols = grid[0].length;
    
    const bfs = (firstLayer) => {
        const q = [...firstLayer];
        const directions = [[1, 0], [-1, 0], [0, 1],[0, -1]];
        while (q.length) {
            minutes++;
            let qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                let [row, col] = q.shift();
                for (let [dr, dc] of directions) {
                    let [r, c] = [row + dr, col + dc];

                    if (0 <= r && r < rows &&
                       0 <= c && c < cols &&
                        grid[r][c] === 1) {
                        grid[r][c] = 2;
                        q.push([r, c]);
                    }
                }    
            }   
        }
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) rottenOranges.push([r, c]);
        }
    }
    
    bfs(rottenOranges);
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 1) return -1;
        }
    }
    
    return minutes === 0 ? 0 : minutes - 1;
};