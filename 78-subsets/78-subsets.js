/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const result = [];
    
    const backtrack = (i, cur) => {
        if (i === nums.length) return result.push([...cur]);
        cur.push(nums[i]);
        backtrack(i + 1, cur);
        
        cur.pop();
        backtrack(i + 1, cur);
    };
    backtrack(0, []);
    
    return result;
};