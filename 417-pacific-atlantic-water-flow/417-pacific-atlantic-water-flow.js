/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    let result = [];
    let rows = heights.length;
    let cols = heights[0].length;
    
    const bfs = (row, col) => {
        let pacific = false;
        let atlantic = false;
        let visited = new Set();
        visited.add(`r${row}c${col}`);
        let q = [[row, col]];
        const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        
        while (q.length) {
            if (pacific && atlantic) return true;
            
            [row, col] = q.shift();
            
            for (let [dr, dc] of directions) {
                let r = row + dr;
                let c = col + dc;
                
                if (!pacific && (r < 0 || c < 0)) pacific = true;
                if (!atlantic && (r === rows || c === cols)) atlantic = true;
                
                if (0 <= r && r < rows &&
                   0 <= c && c < cols &&
                   !visited.has(`r${r}c${c}`) &&
                   heights[r][c] <= heights[row][col]) {
                    visited.add(`r${r}c${c}`);
                    q.push([r, c]);
                }
            }
        }
        
        return pacific && atlantic;
    }
    
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // check if it can reach both oceans
            if (bfs(r, c)) result.push([r, c]);
        }
    }
    
    return result;
};