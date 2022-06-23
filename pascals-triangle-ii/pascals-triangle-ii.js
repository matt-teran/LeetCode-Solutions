/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1,1];
    
    return getRow(rowIndex-1).reduce((acc, cur, i, arr) => {
        if (i === arr.length -1) {
            acc.push(1);
            return acc;
        };
        acc.push(cur+arr[i+1]);
        return acc;
    }, [1])
};