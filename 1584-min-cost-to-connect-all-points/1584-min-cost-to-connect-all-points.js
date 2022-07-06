/**
 * @param {number[][]} points
 * @return {number}
 */
var dist = (a,b) => Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);
var minCostConnectPoints = function(points) {
    const edges = new MinPriorityQueue({compare: (a,b) => a[2] > b[2]});
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            const [a,b] = [points[i], points[j]]
            edges.enqueue([i,j,dist(a,b)])
        }
    }
    const root = [];
    const rank = Array(points.length).fill(0);
    for (let i = 0; i < points.length; i++) root.push(i);
    const find = x => x === root[x] ? x : root[x] = find(root[x]);
    const union = (x,y) => {
        let rootX = find(x);
        let rootY = find(y);
        if (rootX === rootY) return false;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
        return true;
    }
    let cost = 0;
    let numberOfEdges = 0;

    while (numberOfEdges < points.length - 1 && edges.size()) {
        const [a, b, c] = edges.dequeue();
        if (!union(a,b)) continue;
        cost += c;
        numberOfEdges++;
    }
    return cost;
};