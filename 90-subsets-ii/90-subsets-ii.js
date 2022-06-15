/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const result = [];
    // const subset = [];
    nums.sort((a, b) => a - b);
    
    const dfs = (i, subset) => {
        if (i === nums.length) return result.push([...subset]);
        
        subset.push(nums[i]);
        dfs(i + 1, subset);
        
        subset.pop();
        while (i + 1 < nums.length && nums[i] === nums[i + 1]) i++;
        dfs(i + 1, subset);
    };
    
    dfs(0, []);
    
    return result;
};