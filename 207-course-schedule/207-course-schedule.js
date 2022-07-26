/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adj = {};
    const visited = new Set();
    
    for (let i = 0; i < numCourses; i++) adj[i] = [];
    for (let [post, pre] of prerequisites) adj[post].push(pre);
    
    const dfs = (course) => {
        if (!adj[course].length) return true;
        if (visited.has(course)) return false;
        
        visited.add(course);
        
        for (const prereq of adj[course]) {
            if (!dfs(prereq)) return false;
        }
        visited.delete(course);
        
        adj[course] = [];
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};