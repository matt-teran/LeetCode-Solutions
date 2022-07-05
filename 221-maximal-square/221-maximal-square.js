/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let R = matrix.length;
    let C = matrix[0].length;
    let maxSquareLength = 0;

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] === '1') {
                let squareLength = 1;
                let flag = true;
                while (squareLength + i < R && squareLength + j < C && flag) {
                    for (let k = j; k <= squareLength + j; k++) {
                        if (matrix[i + squareLength][k] === '0') {
                            flag = false;
                            break;
                        }
                    }
                    for (let k = i; k <= squareLength + i; k++) {
                        if (matrix[k][j + squareLength] === '0') {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) squareLength++;
                }
                if (maxSquareLength < squareLength) {
                    maxSquareLength = squareLength;
                }
            }
        }
    }
    return maxSquareLength ** 2;
};