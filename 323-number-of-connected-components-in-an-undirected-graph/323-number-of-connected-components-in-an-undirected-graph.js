/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countComponents = function(n, edges) {
    const parents = Array.from(Array(n), (x, i) => i);
    const rank = Array(n).fill(1);
    
    const find = (n) => {
        let p = parents[n];
        while (p !== parents[p]) {
            parents[p] = parents[parents[p]];
            p = parents[p];
        }
        return p;
    }
    const union = (n1, n2) => {
        let [p1, p2] = [find(n1), find(n2)];
        
        if (p1 === p2) return false;
        
        if (rank[p1] > rank[p2]) {
            parents[p2] = p1;
            rank[p1] += rank[p2];
        } else {
            parents[p1] = p2;
            rank[p2] += rank[p1];
        }
        return true;
    }
    for (let [n1, n2] of edges) {
        if (union(n1, n2)) n--;
    }
    
    return n;
};