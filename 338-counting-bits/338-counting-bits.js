/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = Array(n+1).fill(0);
    
    for (let i = 1; i <= n; i++) {
        let cur = 0;
        for (const char of i.toString(2)) char === '1' && cur++;
        result[i] = cur;
    }
    
    return result;
};