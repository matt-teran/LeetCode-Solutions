/**
 * @param {number[][]} workers
 * @param {number[][]} bikes
 * @return {number}
 */
const dist = (a,b) => Math.abs(a[0]-b[0]) + Math.abs(a[1]-b[1]);

var assignBikes = function(workers, bikes) {
    const taken = new Set();
    const backtrack = (w) => {
        if (w === workers.length) return 0;
        if (taken.size === bikes.length) return 0;
        
        let best = Infinity;
        for (let i = 0; i < bikes.length; i++) {
            if (taken.has(i)) continue;
            taken.add(i);
            best = Math.min(best, dist(workers[w], bikes[i]) + backtrack(w+1));
            taken.delete(i);
        }
        return best;
    }
    return backtrack(0);
};