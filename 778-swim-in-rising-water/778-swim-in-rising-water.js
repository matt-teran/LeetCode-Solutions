/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    const n = grid.length;
    const visited = new Set();
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const q = new MinPriorityQueue({compare: (a,b) => a[0] > b[0]});
    visited.add(0+'#'+0);
    q.enqueue([grid[0][0], [0,0]]);
    let elevation = grid[0][0];
    
    while (q.size()) {
        let [depth, [x1, y1]] = q.dequeue();
        visited.add(x1 + '#' + y1);
        elevation = Math.max(depth, elevation)
        if (x1 === n - 1 && y1 === n - 1) return elevation;
        
        for (const [dx, dy] of DIR) {
            const [x2, y2] = [x1 + dx, y1 + dy];
            if (grid?.[x2]?.[y2] !== undefined &&
                !visited.has(x2 + '#' + y2)) {
                q.enqueue([grid[x2][y2], [x2, y2]]);
            }
        }
    }
};