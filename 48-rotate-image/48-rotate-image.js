/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // • reverse loop through matrix
    for (let i = matrix.length - 1; i >= 0; i--) {
        // • for each row, loop for m iterations
        let j = 0;
        while (j < matrix.length) {
            // • for each iteration, push it to the ith array
            matrix[j].push(matrix[i][j]);
            j++;
        }
        
    }
    matrix.forEach(n => {
        n.splice(0, matrix.length);
    })
    // • return matrix        
    return matrix;
};