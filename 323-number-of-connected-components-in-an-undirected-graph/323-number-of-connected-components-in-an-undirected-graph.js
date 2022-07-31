/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const root = [];
    const rank = [];
    for (let i = 0; i < n; i++) {
        root.push(i);
        rank.push(1);
    }
    
    const find = x => x === root[x] ? x : find(root[x]);
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX === rootY) return false;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }
    
    for (const [x, y] of edges) {
        union(x, y);
    }
    
    const components = new Set();
    
    for (let i = 0; i < n; i++) components.add(find(i));
    
    return components.size;
};