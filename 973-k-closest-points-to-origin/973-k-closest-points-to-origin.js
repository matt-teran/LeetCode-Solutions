/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var getDist = function(point) {
    return {
        dist: Math.sqrt((point[0] ** 2) + (Math.abs(point[1]) ** 2)),
        point: point
    };
}

var kClosest = function(points, k) {
    let heap = new MinPriorityQueue({compare: (p1, p2) => p1.dist < p2.dist});

    for (let point of points) heap.enqueue(getDist(point));
    
    while (heap.size() > k) heap.dequeue();
    
    return heap.toArray().map(p => p.point);
};