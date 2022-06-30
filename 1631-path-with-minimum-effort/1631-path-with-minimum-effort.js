/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    const ROWS = heights.length;
    const COLS = heights[0].length;
    if (ROWS === 1 && COLS === 1) return 0;
    const edgeList = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (r > 0) {
                let difference = Math.abs(heights[r][c] - heights[r-1][c])
                edgeList.push([difference, r * COLS + c, (r - 1) * COLS + c]);
            }
            if (c > 0) {
                let difference = Math.abs(heights[r][c] - heights[r][c-1]);
                edgeList.push([difference, r * COLS + c, r * COLS + c - 1]);
            }
        }
    }
    edgeList.sort((a,b)=>a[0]-b[0]);
    
    const root = [];
    for (let i = 0; i < ROWS*COLS; i++) root.push(i);
    const rank = Array(ROWS*COLS).fill(0);
    
    const find = x => x === root[x] ? x : root[x] = find(root[x]);
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return false;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    for (const [difference, a, b] of edgeList) {
        union(a,b);
        if (find(0) === find(ROWS*COLS-1)) return difference;
    }
    return -1;
};