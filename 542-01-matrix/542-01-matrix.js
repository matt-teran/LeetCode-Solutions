/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const rows = mat.length;
    const cols = mat[0].length;
    const result = [];
    const directions = [[1,0],[-1,0],[0,1],[0,-1]];
    let q = [];
    let visited = new Set();
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++){
            if (mat[r][c] === 0) {
                visited.add(`r${r}c${c}`);
                q.push([r, c]);
            }
        }
    }
    
    let count = 0;
    
    // console.log(q);
    while (q.length) {
        count++;
        let qLen = q.length;
        console.log(q);
        for (let i = 0; i < qLen; i++) {
            let [r, c] = q.shift();
            for (let [dr, dc] of directions) {
                let [row, col] = [r + dr, c + dc];
                if (0 <= row && row < rows &&
                   0 <= col && col < cols &&
                   !visited.has(`r${row}c${col}`)) {
                    
                    mat[row][col] = count;
                    visited.add(`r${row}c${col}`);
                    q.push([row,col]);
                }
            }
        }
    }

    return mat;
};