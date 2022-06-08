/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let one = 1, two = 1;
    
    for (let i = 1; i < n; i++) {
        [one, two] = [one + two, one];
    }
    return one;
};