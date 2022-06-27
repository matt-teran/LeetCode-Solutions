/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const combos = [];
    const combo = [];
    const backtrack = (i) => {
        if (combo.length === k) return combos.push([...combo]);
        
        for (let j = i; j <= n; j++) {
            combo.push(j);
            backtrack(j+1);
            combo.pop();
        }
    } 
    backtrack(1);
    return combos;
};