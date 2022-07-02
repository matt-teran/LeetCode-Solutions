/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var numberOfPatterns = (m, n) =>  [9,56,320,1624,7152,26016,72912,140704,140704].reduce((acc, num, i) => (m <= i+1 && i+1 <= n) ? acc + num : acc, 0);