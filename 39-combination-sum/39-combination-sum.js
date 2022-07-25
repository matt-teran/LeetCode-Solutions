/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const combo = [];
    
    const backtrack = (i, sum) => {
        if (sum === target) return result.push([...combo]);
        if (i === candidates.length || sum > target) return;
        
        combo.push(candidates[i]);
        backtrack(i, sum + candidates[i]);
        
        combo.pop();
        backtrack(i + 1, sum);
    };
    backtrack(0, 0);
    
    return result;
};