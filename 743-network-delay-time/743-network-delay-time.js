/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const visited = new Set();
    const adj = {};
    for (let i = 1; i <= n; i++) adj[i] = [];
    for (const [source, target, weight] of times) adj[source].push([target, weight]);
    
    const q = new MinPriorityQueue({compare: (a,b) => a[1] > b[1]});
    let time = 0;
    q.enqueue([k, 0]);
    
    while (q.size()) {
        let [n1, w1] = q.dequeue();
        if (!visited.has(n1)) {
            time = Math.max(time, w1);
            visited.add(n1);
            for (const [n2, w2] of adj[n1]) q.enqueue([n2, w1+w2]);
        };
    }
    
    return visited.size === n ? time : -1;
};