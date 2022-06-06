/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (nums[m] < target) {
            l = m + 1;
        } else if (nums[m] > target) {
            r = m - 1;
        } else {
            return true;
        }
    }
    return false;
}
var searchMatrix = function(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    
    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        
        if (matrix[m][matrix[m].length - 1] < target) {
            l = m + 1;
        } else if (matrix[m][0] > target) {
            r = m - 1;
        } else {
            return search(matrix[m], target);
        }
    }
    return false;
};