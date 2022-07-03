/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let res = 0;
    for (const char of n.toString(2)) char === '1' && res++;
    return res;
};