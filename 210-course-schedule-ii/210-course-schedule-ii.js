/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const result = [];
    const q = [];
    const adj = {};
    const inDegree = {};
    for (let i = 0; i < numCourses; i++) {
        adj[i] = [];
        inDegree[i] = 0;
    };
    for (const [dest, src] of prerequisites) {
        adj[src].push(dest)
        inDegree[dest]++;
    };
    
    for (const course in inDegree) if (!inDegree[course]) q.push(course);
    while (q.length) {
        let src = q.shift();
        for (const dest of adj[src]) {
            if (!(inDegree[dest]-- - 1)) q.push(dest);
        }
        result.push(src);
    }
    return result.length === numCourses ? result : [];
};