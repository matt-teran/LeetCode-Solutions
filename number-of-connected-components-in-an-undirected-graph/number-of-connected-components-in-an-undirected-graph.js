/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const root = Array(n);
    for (let i = 0; i < n; i++) root[i] = i;
    const rank = Array(n).fill(1);
    
    const find = x => x === root[x] ? x : root[x] = find(root[x]);
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        if (rootX === rootY) return;
        // if (rootX !== rootY) {
            if (rank[rootX] > rank[rootY]) {
                root[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                root[rootX] = rootY;
            } else {
                root[rootY] = rootX;
                rank[rootX]++;
            }
        // }
    }
    for (let [x, y] of edges) {
        union(x, y);
    }
    const components = new Set();
    for (let i = 0; i < n; i++) components.add(find(i));
    return components.size;
};