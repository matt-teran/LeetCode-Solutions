/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const diffMatrix = [];
    for (let r = 0; r < ROWS; r++) diffMatrix.push(Array(COLS).fill(Infinity));
    diffMatrix[0][0] = 0;
    const visited = new Set();
    
    const minHeap = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    minHeap.enqueue([0,0,0]);
    
    while(minHeap.size()) {
        const [difference, row, col] = minHeap.dequeue();
        
        visited.add(row+'#'+col);
        
        for (const [dr,dc] of DIR) {
            let [r,c] = [row+dr,col+dc];
            
            if (heights?.[r]?.[c] !== undefined &&
                !visited.has(r+'#'+c)) {
                
                let currentDiff = Math.abs(heights[r][c] - heights[row][col]);
                
                let maxDiff = Math.max(currentDiff, diffMatrix[row][col]);
                if (diffMatrix[r][c] > maxDiff) {
                    diffMatrix[r][c] = maxDiff;
                    minHeap.enqueue([maxDiff,r,c]);
                }
            }
        }
    }
    return diffMatrix[ROWS-1][COLS-1];
};