/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let currentRow = Array(points[0].length).fill(0);
    let previousRow = Array(points[0].length).fill(0);

    for (const row of points) {
        let runMax = 0;
        for (let i = 0; i < row.length; i++) {
            runMax = Math.max(runMax - 1, previousRow[i]);
            currentRow[i] = runMax;
        }
        for (let i = row.length - 1; i > -1; i--) {
            runMax = Math.max(runMax - 1, previousRow[i]);
            currentRow[i] = Math.max(currentRow[i], runMax) + row[i];
        }
        previousRow = currentRow;
    }
    return Math.max(...previousRow);
};

// BC
// i === points.length => return sum;
// 
// RR
// dp(i) => for each j, sum + points[j] - dp(i+1,)
//
// Function
// dp() => col
// state variables
// • i - row
// • j - col
// • sum
// 