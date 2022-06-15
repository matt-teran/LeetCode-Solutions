/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const result = [];
    candidates.sort((a, b) => a - b);

    const dfs = (i, combo, sum) => {
        if (sum === target) return result.push([...combo]);
        if (i === candidates.length) {
            
            return;
        };
        if (sum > target) return;
        
        combo.push(candidates[i]);
        dfs(i + 1, combo, sum + candidates[i]);
        
        combo.pop();
        while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) i++;
        dfs(i + 1, combo, sum);
    }
    
    dfs(0, [], 0);
    return result;
};