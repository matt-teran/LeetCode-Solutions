/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const result = [];
    const visited = new Set();
    
    const bfs = (cell) => {
        let pacific = false;
        let atlantic = false;
        
        const q = [cell];
        
        while (q.length) {
            if (pacific && atlantic) return true;
            let [row, col] = q.shift();
            
            for (const [dr, dc] of DIR){
                const [r,c] = [row + dr, col + dc];
                if (r < 0 || c < 0) pacific = true;
                if (r === ROWS || c === COLS) atlantic = true;
                if (!visited.has(r+'#'+c) && heights?.[r]?.[c] <= heights[row][col]) {
                    visited.add(r+'#'+c);
                    q.push([r,c]);
                }
            }
        }
        
        return pacific && atlantic;
    }
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (bfs([r,c])) result.push([r,c]);
            visited.clear();
        }
    }
    
    return result;
};