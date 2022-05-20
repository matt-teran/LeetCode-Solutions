/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let result = [[1]];
    let i = 0
    while (i < rowIndex) {
        let j = -1;
        let arr = [];
        while (j < result[i].length) {
            arr.push((result[i][j] || 0) + (result[i][j + 1] || 0));   
            j++;
        }
        result.push(arr);
        i++;
    }
    
    return result[result.length -1];
};