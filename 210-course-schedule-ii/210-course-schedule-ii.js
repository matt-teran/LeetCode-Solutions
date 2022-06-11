/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    // create adjacency list
    const map = {};
    const order = new Set();
    const visited = new Set();
    for (let i = 0; i < numCourses; i++) {
        map[i] = [];
    }
    for (let [course, prereq] of prerequisites) {
        map[course].push(prereq);
    }
    
    const dfs = (course) => {
        if (visited.has(course)) {
            return false;
        }
        if (map[course].length === 0) {
            // order.push(course);
            order.add(course);
            return true;
        }
        
        visited.add(course);
        for (let prereq of map[course]) {
            if (!dfs(prereq)) return false;
        }
        visited.delete(course);
        
        map[course] = [];
        // order.push(course);
        order.add(course);
        return true;
    }
    
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }
    return [...order];
    // go  through courses
    // for each class, if it has prereqs, try and complete those prereqs first
    // once the prereqs are completed, complete the class
    // move on to next class
    //return order
};