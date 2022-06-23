/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // const dp = new Array(nums.length).fill(false);
    nums[nums.length - 1] = true;
    let latestTrueIndex = nums.length - 1;
    
    for (let i = nums.length - 2; i > -1; i--) {
        if (i + nums[i] >= latestTrueIndex) {
            // nums[i] = true;
            latestTrueIndex = i;
        };
    }

    return latestTrueIndex === 0;
};


// base case
// i === nums.length - 1

// function
// dp(0) => bool

// rr

// state variables
// • index of nums
