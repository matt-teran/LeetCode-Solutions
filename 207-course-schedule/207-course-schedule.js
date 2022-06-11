/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var node = function(val) {
    this.val = val;
    this.children = [];
}
var canFinish = function(numCourses, prerequisites) {
    let map = {};
    let visited = new Set();
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    for (let [course, prereq] of prerequisites) {
        map[course].push(prereq);
    }
    
    const dfs = (course) => {
        if (!map[course].length) return true;
        if (visited.has(course)) return false;
        
        visited.add(course);
        for (let prereq of map[course]) {
            if (!dfs(prereq)) return false;
        }
        visited.delete(course);
        map[course] = [];
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};