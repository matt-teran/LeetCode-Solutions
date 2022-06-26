/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    let nums1 = nums.slice(1);
    let nums2 = nums.slice(0, nums.length-1);
    const memo1 = {};
    const memo2 = {};
    const dp1 = (i) => {
        if (i < 0) return 0;
        if (!memo1.hasOwnProperty(i)) {
            memo1[i] = Math.max(nums1[i] + dp1(i-2), dp1(i-1));
        }
        return memo1[i];
    }
    const dp2 = (i) => {
        if (i < 0) return 0;
        if (!memo2.hasOwnProperty(i)) {
            memo2[i] = Math.max(nums2[i] + dp2(i-2), dp2(i-1));
        }
        return memo2[i];
    }
    return Math.max(dp1(nums1.length-1), dp2(nums2.length-1));
};

// base case
// • i <2
// rr
// • 
// function
// • max profit
