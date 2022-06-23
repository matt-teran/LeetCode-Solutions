/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const memo = {};
    
    const dp = (i) => {
        if (i === nums.length - 1) return true;
        
        if (!memo.hasOwnProperty(i)) {
            memo[i] = false;
            for (let j = i+1; j <= i+nums[i]; j++) {
                if (dp(j)) {
                    memo[i] = true;
                    return memo[i];
                };
            }
        }
        return memo[i];
    }
    
    return dp(0)
};


// base case
// i === nums.length - 1

// function
// dp(0) => bool

// rr

// state variables
// • index of nums
