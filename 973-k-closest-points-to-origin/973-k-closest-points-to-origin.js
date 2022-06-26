/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var dist = (a,b=[0,0]) => Math.sqrt((a[0]-b[0])**2+(a[1]-b[1])**2);

var kClosest = function(points, k) {
    const heap = new MaxPriorityQueue({compare: (a,b)=>a[1]<b[1]});
    for (let point of points) heap.enqueue([point,dist(point)]);
    while(heap.size()>k)heap.dequeue();
    return heap.toArray().map(i=>i[0]);
};