/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = [[1]];
    
    let i = 0;
    while (i < numRows - 1) {
        let j = -1;
        const arr = [];
        while (j < result[i].length) {
            arr.push((result[i][j] || 0) + (result[i][j + 1] || 0));
            j++;
        }
        result.push(arr);
        i++;
    }
    
    return result;
};