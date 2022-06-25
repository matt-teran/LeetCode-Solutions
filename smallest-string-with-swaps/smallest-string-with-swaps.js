/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    let n = s.length;
    const root = []
    for (let i = 0; i < n; i++) root.push(i);
    const rank = Array(n - 1).fill(1);
    
    const find = x => {
        if (x === root[x]) return x
        root[x] = find(root[x]);
        return root[x];
    };
    const union = (x, y) => {
        let rootX = find(x);
        let rootY = find(y);
        
        if (rootX === rootY) return;
        
        if (rank[rootX] > rank[rootY]) {
            root[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            root[rootX] = rootY;
        } else {
            root[rootY] = rootX;
            rank[rootX]++;
        }
    }
    
    for (let pair of pairs) union(pair[0],pair[1]);
    
    let hash = {};
    for (let i = 0; i < n; i++) {
        let rootI = find(i);
        if (hash[rootI]) {
            hash[rootI][0].push(s[i]);
            hash[rootI][1].push(i);
        } else {
            hash[rootI] = [[s[i]], [i]];
        }
    }
    // console.log(hash);
    let result = Array(n - 1);
    for (let [str, indexes] of Object.values(hash)) {
        if (str.length > 1) {
            str.sort();
            for (let i = 0; i < n; i++) result[indexes[i]] = str[i];
        } else {
            result[indexes[0]] = str[0];
        }
        
    }
    return result.join('');
};