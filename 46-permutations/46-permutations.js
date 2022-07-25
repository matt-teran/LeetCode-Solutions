/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const combo = new Set();
    
    const backtrack = (i) => {
        if (combo.size === nums.length) return result.push([...combo]);
        
        for (let i = 0; i < nums.length; i++) {
            if (!combo.has(nums[i])) {
                combo.add(nums[i]);
                backtrack(0);
                combo.delete(nums[i]);
            }
            
        }
    };
    
    backtrack(0);
    return result;
};