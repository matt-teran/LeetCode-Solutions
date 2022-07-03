/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;
    let mask = 1;
    for (let i = 0; i < 32; i++) {
        if ((n & mask) !== 0) res++;
        mask <<= 1;
    }
    return res;
};