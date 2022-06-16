/**
 * @param {number[][]} points
 * @return {number}
 */
var getDist = (a, b) => {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

var minCostConnectPoints = function(points) {
    const adj = {};
    for (let i = 0; i < points.length; i++) adj[i] = [];
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        for (let j = i + 1; j < points.length; j++) {
            const [x2, y2] = points[j];
            const dist = Math.abs(x2 - x1) + Math.abs(y2 - y1);
            
            adj[i].push([dist, j]);
            adj[j].push([dist, i]);
        }
    }
    
    // Prims
    const visited = new Set();
    let result = 0;
    let frontier = new MinPriorityQueue({compare: (a, b) => a[0] > b[0]});
    frontier.enqueue([0, 0])
    
    while (visited.size < points.length) {
        let [cost, i] = frontier.dequeue();
        if (visited.has(i)) continue;
        result += cost;
        visited.add(i);
        for (let [neiCost, nei] of adj[i]) {
            if (!visited.has(nei)) frontier.enqueue([neiCost, nei])
        }
    }
    return result
};