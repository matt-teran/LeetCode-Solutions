/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let [f1, f2] = [0, 1];
    
    while (n > -1) {
        [f1, f2] = [f1 + f2, f1];
        n--;
    }
    return f1;
};