/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

// Check if graph contains n - 1 edges AND is fully connected
var validTree = function(n, edges) {
    // If the graph does not contain n - 1 edges, it is NOT a valid tree
    if (edges.length !== n - 1) return false;
    
    // check if single component
    const root = [];
    for (let i = 0; i < n; i++) root.push(i);
    const rank = Array(n - 1).fill(1);
    
    const find = x => x === root[x] ? x : find(root[x]);
    
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    for (let [x, y] of edges) {
        union(x, y);
    }
    const componentRoots = new Set();
    for (let i = 0; i < n; i++) {
        componentRoots.add(find(i));
    }
    return componentRoots.size === 1;
};