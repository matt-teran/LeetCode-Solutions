/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const WHITE = 1;
    const GRAY = 2;
    const BLACK = 3;
    const adj = {};
    for (const [dest, src] of prerequisites) {
        adj[src] ? adj[src].push(dest) : adj[src] = [dest];
    }
    const s = [];
    let isPossible = true;
    const color = {};
    for (let i = 0; i < numCourses; i++) {
        color[i] = WHITE;
    }
    const dfs = (node) => {
        if (!isPossible) return;
        
        color[node] = GRAY;
        
        if (node in adj) {
            for (const neighbor of adj[node]) {
                if (color[neighbor] === WHITE) {
                    dfs(neighbor);
                } else if (color[neighbor] === GRAY) {
                    isPossible = false;
                }
            }
        }
        color[node] = BLACK;
        s.push(node);
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (color[i] === WHITE) dfs(i);
    }
    return isPossible ? s.reverse() : [];
};