/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b) => a - b);
    
    const result = [];
    const combo = [];
    
    const backtrack = (i, sum) => {
        if (sum === target) return result.push([...combo]);
        if (i === candidates.length || sum > target) return;
        
        combo.push(candidates[i]);
        backtrack(i + 1, sum + candidates[i]);
        
        combo.pop();
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
        backtrack(i + 1, sum);
    };
    
    backtrack(0, 0);
    
    return result;
};