/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0;
    let r = nums.length - 1;
    let min = nums[0];
    while (l <= r) {
        if (nums[l] < nums[r]) return Math.min(min, nums[l]);
        
        let m = Math.floor((l + r) / 2);
        
        min = Math.min(min, nums[m]);
        
        if (nums[l] <= nums[m]) {
            l = m + 1
        } else {
            r = m - 1;
        }
    }
    return min;
};

// 3,4,5,1,2
// 