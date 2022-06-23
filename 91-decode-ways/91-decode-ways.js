/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const memo = {};
    
    const dp = (i) => {
        if (i >= s.length) return 1;
        // if (s[i] === "0" || s.slice(i, i+2) > 26) return 0;
        
        if ( !(i in memo) ) {
            memo[i] = 0;
            if (s[i] !== "0") {
                memo[i] += dp(i+1);
                if (i < s.length - 1 && s.slice(i, i+2) < 27) memo[i] += dp(i+2);
            }
        }
        
        return memo[i]
    }
    return dp(0);
};

// base case
// • i === s.length => 1
// • s[i] === 0 => 0
// • s.slice(i, i+2) > 26 => 0

// recurrence relation
// dp(i) = Sum of:
// • dp(i+1) 
// • dp(i+2)

// function
// dp(i) => num

// state variables
// • i - beginning index of string