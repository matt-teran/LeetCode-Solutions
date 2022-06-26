/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    let nums1 = nums.slice(1);
    let nums2 = nums.slice(0, nums.length - 1);
    
    return Math.max(dpParent(nums1), dpParent(nums2));
};

var dpParent = (nums) => {
    const memo = {};
    const dp = (i) => {
        if (i < 0) return 0;
        
        if (!memo.hasOwnProperty(i)) {
            memo[i] = Math.max(nums[i] + dp(i-2), dp(i-1));
        }
        
        return memo[i];
    }
    
    return dp(nums.length-1);
}

// base case
// • i <2
// rr
// • 
// function
// • max profit
