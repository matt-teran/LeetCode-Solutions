/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    //visited set
    const visited = new Set();
    
    // create adjacency list
    const edges = {};
    for (let [source, target, time] of times) edges[source] = [];
    for (let [source, target, time] of times) edges[source].push([target, time]);
    
    // min heap
    const heap = new MinPriorityQueue({compare: (a, b) => a[1] > b[1]});
    heap.enqueue([k, 0]);
    let time = 0;
    
    // bfs
    while (heap.size()) {
        let dequeued = heap.dequeue();
        let [n1, w1] = dequeued;
        
        if (visited.has(n1)) continue;
        visited.add(n1);
        
        time = Math.max(time, w1);
        
        if (n1 in edges) {
            for (let [n2, w2] of edges[n1]) {
                if (!visited.has(n2)) heap.enqueue([n2, w1 + w2]);
            }
        }
    }
    
    return visited.size === n ? time : -1;
};