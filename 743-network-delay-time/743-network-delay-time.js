/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const visited = new Set();
    const edges = {};
    for (let [u, v, w] of times) edges[u] = [];
    for (let [u, v, w] of times) edges[u].push([v, w]);
    
    const djikstrasheap = new MinPriorityQueue({compare: (a, b) => a[0] > b[0]});
    djikstrasheap.enqueue([0, k]);
    let time = 0;
    
    while (djikstrasheap.size()) {
        // console.log(djikstrasheap.dequeue());
        let [w1, n1] = djikstrasheap.dequeue();
        
        if (visited.has(n1)) continue;
        visited.add(n1);
        
        time = Math.max(time, w1);
        if (n1 in edges) {
            for (let [n2, w2] of edges[n1]) {
                if (!visited.has(n2)) djikstrasheap.enqueue([w1 + w2, n2]);
            }
        }
    }
    
    return visited.size === n ? time : -1;
};