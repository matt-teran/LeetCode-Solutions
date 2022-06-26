/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const backtrack = (combo,l,r) => {
        // push complete solution
        if (combo.length === n * 2) return result.push(combo);
        
        // only explore candidate if valid
        l < n && backtrack(combo+'(',l+1,r)
        r < l && backtrack(combo+')',l,r+1);
    }
    
    backtrack('',0,0);
    
    return result;
};