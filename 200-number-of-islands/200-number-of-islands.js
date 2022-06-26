/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const ROWS = grid.length;
    const COLS = grid[0].length;
    const DIR = [[1,0],[0,1],[-1,0],[0,-1]];
    let islandCount = 0;
    const q = [];
    const bfs = () => {
        islandCount++;
        while(q.length) {
            let qLen = q.length;
            for (let i = 0; i < qLen; i++) {
                let [row, col] = q.shift();
                for (let [dr, dc] of DIR) {
                    let [r,c] = [row+dr,col+dc];
                    if (grid?.[r]?.[c] === "1") {
                        grid[r][c] = "2";
                        q.push([r,c]);
                    }
                }
            }
        }
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === '1') {
                q.push([r,c]);
                bfs();
            }
        }
    }
    return islandCount;
};