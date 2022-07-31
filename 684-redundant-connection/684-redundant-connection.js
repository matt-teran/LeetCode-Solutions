/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const root = [0];
    const rank = [];
    
    for (let i = 0; i < edges.length; i++) {
        rank.push(1);
        root.push(i + 1);
    }

    const find = (x) => root[x] === x ? root[x] : find(root[x]);
    
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return false
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
            rank[rootX] += rank[rootY];
        } else {
            root[rootX] = rootY;
            rank[rootY] += rank[rootX];
        }
        return true;
    }
    
    for (const [x, y] of edges) {
        if (!union(x, y)) return [x, y];
    }
};