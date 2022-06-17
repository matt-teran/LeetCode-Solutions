/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    let nums2 = nums.slice(1);
    nums.pop();
    nums.push(0);
    nums2.push(0);
    
    // DP table calculations
    for (let i = nums.length - 3; i > -1; i--) {
        nums[i] = Math.max(nums[i + 1], nums[i + 2] + nums[i]);
        nums2[i] = Math.max(nums2[i + 1], nums2[i + 2] + nums2[i]);
    }
    return Math.max(nums[0], nums2[0]);
};