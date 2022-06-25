/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

var validTree = function(n, edges) {
    if (edges.length !== n - 1) return false;
    
    const root = [];
    for (let i = 0; i < n; i++) root.push(i); // n
    const rank = Array(n - 1).fill(1); // n
    
    const find = x => x === root[x] ? x : root[x] = find(root[x]);
    
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return true;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    for (let [x, y] of edges) if (union(x, y)) return false; // n
    
    return true;
};