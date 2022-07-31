/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const result = [];
    
    const adj = {};
    const indegree = {};
    
    for (let i = 0; i < numCourses; i++) {
        adj[i] = [];
        indegree[i] = 0;
    }
    
    for (const [dest, src] of prerequisites) {
        adj[src].push(dest);
        indegree[dest]++;
    }
    
    const q = [];
    for (const course in indegree) if (!indegree[course]) q.push(course);
    
    while (q.length) {
        const src = q.shift();
        
        for (const dest of adj[src]) {
            indegree[dest]--;
            if (!indegree[dest]) q.push(dest);
        }
        
        result.push(src);
    }
    
    return result.length === numCourses ? result : [];
};