/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let flattened = matrix.flat();
    
    let l = 0;
    let r = flattened.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (flattened[m] < target) {
            l = m + 1;
        } else if (flattened[m] > target) {
            r = m - 1;
        } else {
            return true;
        }
    }
    return false;
};