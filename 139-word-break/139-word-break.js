/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const memo = {};
    
    const dp = (cs) => {
        if (cs === s) return true;
        if (cs !== s.slice(0, cs.length)) return false;
        if (cs.length > s.length) return false;
        
        if ( !(cs in memo) ) {
            let bool = false;
            for (let word of wordDict) {
                if (dp(cs.concat(word))) bool = true;
            }
            memo[cs] = bool;
        }
            
        return memo[cs];
    }
    
    return dp('');
};

// base case
// s = cs => true
// cs.len > s.len => false

// recurrence relation 
// dp(cs) = dp(cs + wordDict[i])

// function
// dp('');

// state variables
// • constructed string