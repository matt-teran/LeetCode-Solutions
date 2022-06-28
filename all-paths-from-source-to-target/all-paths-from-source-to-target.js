/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const N = graph.length;
    const source = 0;
    const target = N - 1;
    const result = [];
    const adj = {};
    const path = [0];
    const visited = new Set();
    for (let i = 0; i < N; i++) adj[i] = graph[i];
    
    const dfs = (node) => {
        if (node === target) return result.push([...path]);
        
        for (let neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                path.push(neighbor);
                visited.add(neighbor);
                dfs(neighbor);
                path.pop();
                visited.delete(neighbor);
            }
        }
    }
    
    dfs(source);
    
    return result;
};