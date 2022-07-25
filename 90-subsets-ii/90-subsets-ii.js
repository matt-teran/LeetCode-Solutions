/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a,b) => a - b);
    const result = [];
    
    const backtrack = (i, combo) => {
        if (i === nums.length) return result.push([...combo]);
        
        combo.push(nums[i]);
        backtrack(i + 1, combo);
        
        combo.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
        backtrack(i + 1, combo);
    };
    
    backtrack(0, []);
    
    return result;
};