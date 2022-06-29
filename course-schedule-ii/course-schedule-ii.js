/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // create adjacency list
    const result = new Set();
    const adj = {};
    const visited = new Set();
    for (let i = 0; i < numCourses; i++) adj[i] = [];
    for (let [prereq, course] of prerequisites) adj[prereq].push(course);
    
    const dfs = (course) => {
        if (visited.has(course)) return false;
        if (adj[course].length === 0) {
            result.add(course);
            return true;
        }
        visited.add(course);
        if (adj[course].length) {
            for (let prereq of adj[course]) {
                if (!dfs(prereq)) return false;
            }
        }
        result.add(course);
        visited.delete(course);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return [...result];
    // go  through courses
    // for each class, if it has prereqs, try and complete those prereqs first
    // once the prereqs are completed, complete the class
    // move on to next class
    //return order
};