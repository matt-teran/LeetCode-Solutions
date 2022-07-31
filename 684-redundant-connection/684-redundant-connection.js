/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const root = [0];
    const rank = [];
    for (let i = 0; i < edges.length; i++) {
        root.push(i + 1);
        rank.push(1);
    }
    
    const find = x => x === root[x] ? x : find(root[x]);
    
    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);
        
        if (rootX === rootY) return false;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
        
        return true;
    }
    
    for (const edge of edges) {
        if (!union(edge[0],edge[1])) return edge;
    }
};