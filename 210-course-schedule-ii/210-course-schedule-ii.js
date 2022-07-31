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
    
    for (const [post, pre] of prerequisites) {
        adj[pre].push(post);
        indegree[post]++;
    }
    
    const q = [];
    for (const course in indegree) {
        if (indegree[course] === 0) q.push(course);
    }
    
    while (q.length) {
        const pre = q.shift();
        
        for (const post of adj[pre]) {
            indegree[post]--;
            if (indegree[post] === 0) {
                q.push(post);
            }
        }
        
        result.push(pre);
    }
    
    return result.length === numCourses ? result : [];
};