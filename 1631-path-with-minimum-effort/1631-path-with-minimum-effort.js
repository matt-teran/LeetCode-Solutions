/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const difficultyMatrix = [];
    for (let i = 0; i < ROWS; i++) difficultyMatrix.push(Array(COLS).fill(Infinity));
    difficultyMatrix[0][0] = 0;
    
    const visited = new Set();
    
    const heap = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    heap.enqueue([0,0,0]);
    
    while (heap.size()) {
        const [difficulty, row, col] = heap.dequeue();
        visited.add(row+'#'+col);
        for (const [dr, dc] of DIR) {
            const [r,c] = [row+dr,col+dc];
            if (heights?.[r]?.[c] !== undefined && !visited.has(r+'#'+c)) {
                const currentDifficulty = Math.abs(heights[r][c] - heights[row][col]);
                const maxDifficulty = Math.max(currentDifficulty, difficultyMatrix[row][col]);
                if (difficultyMatrix[r][c] > maxDifficulty) {
                    difficultyMatrix[r][c] = maxDifficulty;
                    heap.enqueue([maxDifficulty,r,c]);
                }
            }
        }
    }
    return difficultyMatrix[ROWS-1][COLS-1];
};