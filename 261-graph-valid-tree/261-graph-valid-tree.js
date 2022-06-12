/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    if (n === 0) return true;
    let visited = new Set();
    const adj = {};
    for (let i = 0; i < n; i++) {
        adj[i] = [];
    }
    for (let [n1, n2] of edges) {
        adj[n1].push(n2);
        adj[n2].push(n1);
    }
    
    const dfs = (n, prev) => {
        if (visited.has(n)) {
            return false;
        }
        visited.add(n);
        
        for (let i of adj[n]) {
            if (i === prev) {
                continue;
            }
            if (!dfs(i, n)) return false;
        }
        return true;
    }
    return dfs(0, -1) && n === visited.size;
};