/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    const adj = {};
    const parent = new Map();
    parent.set(0, -1);
    for (let i = 0; i < n; i++) adj[i] = [];
    for (let [x, y] of edges) {
        adj[x].push(y);
        adj[y].push(x);
    }

    let stack = [0];
    while (stack.length) {
        let node = stack.pop();
        
        for (let neighbor of adj[node]) {
            if (parent.get(node) === neighbor) continue;
            
            if (parent.has(neighbor)) return false;
            
            stack.push(neighbor);
            parent.set(neighbor, node);
        }
    }

    return parent.size === n;
};