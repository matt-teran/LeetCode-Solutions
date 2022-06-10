/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// inputs: integer array, integer
// output: integer, sum closest to target
// constraints: 
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    
    let result = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length; i++) {
        let l = i + 1;
        let r = nums.length - 1;
        
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            
            if (Math.abs(target - sum) < Math.abs(target - result)) {
                result = sum;
            }
            if (target < sum) {
                r--;
            } else if (target > sum) {
                l++;
            } else {
                return target;
            }
        }
    }
    console.log(nums);
    return result;
};