/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [0];
    for (let i = 1; i <= n; i++) {
        let count = 0;
        for (let j = 0; j < 32; j++) {
            if (1 & (i >> j)) count++;
        }
        result.push(count);
    }
    return result;
};