/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const visited = new Set();
    
    const adj = {};
    for (const [source, target, time] of times) adj[source] = [];
    for (const [source, target, time] of times) adj[source].push([target, time]);
    
    const minHeap = new MinPriorityQueue({compare: (a,b) => a[1] > b[1]});
    minHeap.enqueue([k, 0]);
    let time = 0;
    
    while (minHeap.size()) {
        const [n1, w1] = minHeap.dequeue();
        
        if (visited.has(n1)) continue;
        visited.add(n1);
        time = Math.max(time, w1);
        
        if (n1 in adj) {
            for (const [n2, w2] of adj[n1]) {
                if (!visited.has(n2)) minHeap.enqueue([n2, w1 + w2]);
            }
        }
    }
    
    return visited.size === n ? time : -1;
};