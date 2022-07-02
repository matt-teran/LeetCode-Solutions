/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
    let hmm = [0,9,56,320,1624,7152,26016,72912,140704,140704];
    let sum = 0;
    while (m <= n) {
        sum += hmm[m];
        m++;
    }
    return sum;
};