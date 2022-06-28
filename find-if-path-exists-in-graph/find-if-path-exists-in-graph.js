/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const adj = {};
    for (let i = 0; i < n; i++) adj[i] = [];
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }
    const visited = new Set();
    // const stack = [source];
    // while (stack.length) {
    //     let vertex = stack.pop();
    //     if (vertex === destination) return true;
    //     if (visited.has(vertex)) ;
    //     visited.add(vertex);
    //     for (let v of adj[vertex]) {
    //         if (!visited.has(v)) stack.push(v);
    //     }
    // }
    // return false;
    const dfs = (vertex) => {
        if (vertex === destination) return true;
        if (visited.has(vertex)) return false;
        visited.add(vertex);
        for (let v of adj[vertex]) {
            if (dfs(v)) return true;
        }
        return false;
    }
    
    return dfs(source);
};