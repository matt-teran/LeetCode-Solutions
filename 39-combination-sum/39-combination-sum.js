/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    const combo = [];
    
    const dfs = (i, sum) => {
        if (sum === target) {
            result.push([...combo]);
            return;
        }
        if (sum > target || i === candidates.length) return;
        
        combo.push(candidates[i]);
        dfs(i, sum + candidates[i]);
        
        combo.pop();
        dfs(i + 1, sum);
    }
    
    dfs(0, 0);
    return result;
};