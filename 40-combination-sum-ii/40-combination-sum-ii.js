/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    const result = [];
    const combo = [];
    let sum = 0;
    
    const backtrack = (i) => {
        if (sum === target) return result.push([...combo]);
        if (sum > target || i === candidates.length) return;
        
        combo.push(candidates[i]);
        sum+=candidates[i]
        backtrack(i+1);
        sum-=candidates[i]
        combo.pop();
        
        while (i < candidates.length && candidates[i] === candidates[i+1]) i++;
        backtrack(i+1);
    }
    backtrack(0);
    
    return result;
};