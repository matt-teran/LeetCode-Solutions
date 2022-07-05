/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    // check if least significant is 1 or 0
    // right shift
    let result = 0;
    for (let i = 0; i < 32; i++) {
        if ((n >> i) & 1) result |= (1 << (31 - i))
    }
    return result >>> 0;
};