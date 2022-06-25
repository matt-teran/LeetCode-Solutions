/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var validTree = function(n, edges) {
    console.log(n -1, edges.length)
    if (edges.length !== n - 1) return false;
    
    // Create Adjacency List
    const adj = {};
    for (let i = 0; i < n; i++) adj[i] = []; 
    for (let [x, y] of edges) {
        adj[x].push(y);
        adj[y].push(x);
    }
    
    // Create 'seen' map
    // const seen = new Map();
    // seen.set(0, -1);
    const seen = new Set([0]);

    // Perform Iterative DFS
    let stack = [0];
    while (stack.length) {
        let node = stack.pop();
        
        for (let neighbor of adj[node]) {
            // Check if target neighbor has already been seen
            if (seen.has(neighbor)) continue;
            
            // If target node has been seen, return false
            // if (seen.has(neighbor)) return false;
            
            // Continue DFS, Add reverse relationship to seen
            stack.push(neighbor);
            seen.add(neighbor);
        }
    }

    return seen.size === n;
};