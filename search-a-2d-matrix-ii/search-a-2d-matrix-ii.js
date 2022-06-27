/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const search = (nums) => {
        let l = 0;
        let r = nums.length - 1;
        while (l<=r) {
            let m = Math.floor((r-l)/2) + l;
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
    for (let col of matrix) if (search(col)) return true;
    return false;
};