/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    let gotRow = getRow(rowIndex-1);
    let res = [1];
    for (let i = 0; i < gotRow.length - 1; i++) {
        res.push(gotRow[i]+gotRow[i+1]);
    }
    res.push(1);
    return res;
};