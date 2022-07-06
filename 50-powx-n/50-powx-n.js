/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    
    if (n < 0) {
        x = 1 / x;
        n *= -1
    }
    
    let half = myPow(x, Math.floor(n / 2));
    if (n % 2 === 0) return half * half;
    return half * half * x;
};