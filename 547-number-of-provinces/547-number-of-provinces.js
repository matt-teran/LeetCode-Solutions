/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const n = isConnected.length;
    const root = Array(n);
    for (let i = 0; i < n; i++) root[i] = i;
    const rank = Array(n).fill(1);
    
    const find = (x) => {
        if (x === root[x]) return x;
        root[x] = find(root[x]);
        return root[x];
    }
    
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootY !== rootX) {
            if (rank[rootX] > rank[rootY]) {
                root[rootY] = rootX;
            } else if (rank[rootX] < rank[rootY]) {
                root[rootX] = rootY;
            } else {
                root[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (j !== i && isConnected[i][j]) {
                union(i, j);
            }
        }
    }
    const provinceRoots = new Set();
    for (let i = 0; i < n; i++) {
        provinceRoots.add(find(i));
    }
    return provinceRoots.size;
};