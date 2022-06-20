/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text2.length > text1.length) [text1, text2] = [text2, text1];
    const memo = {};
    
    const dp = (i, j) => {
        if (i === text1.length) return 0;
        if (j === text2.length) return 0;
        let res = text1[i] === text2[j] ? 1 : 0;
        if ( !(i in memo) ) memo[i] = {};
        
        if ( !(j in memo[i]) ) {
            memo[i][j] = Math.max(res + dp(i+1, j+1), dp(i+1, j), dp(i, j+1));
        }
        
        return memo[i][j];
    };
    
    return dp(0,0);
};

// base case
// i === long.length return 0
// j === short.length return 0

// recurrence relation
// dp(i, j) = Math.max(1 + dp(i + 1, j + 1), dp(i + 1));

// function
// dp(i, j) => number

// possible state variables
// i of long string, i of short string
// 