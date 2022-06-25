/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function(logs, n) {
    logs.sort((a,b)=>a[0]-b[0]);
    const root = Array(n - 1);
    for (let i=0;i<n;i++)root[i]=i;
    const rank = Array(n).fill(1);
    const find = x => x === root[x] ? x : root[x] = find(root[x]);
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return true;
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    for (let [timestamp, x, y] of logs) {
        if (!union(x, y)) n--;
        if (n === 1) return timestamp
        // let friendGroups = new Set();
        // for (let i = 0; i < n; i++) {
        //     friendGroups.add(find(i));
        // }
        // if (friendGroups.size === 1) return timestamp;
    }
    return -1;
};