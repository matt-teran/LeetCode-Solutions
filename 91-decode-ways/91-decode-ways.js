/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const n = s.length
    
    const dp = new Array(n + 1).fill(0);
    dp.fill(1, n);
    
    for (let i = n - 1; i > -1; i--) {
        if (s[i] !== "0") {
            dp[i] += dp[i+1];
            if (i < s.length - 1 && s.slice(i, i+2) < 27) dp[i] += dp[i+2];
        }
    }
    return dp[0];
    
//     const memo = {};
    
//     const dp = (i) => {
//         if (i >= s.length) return 1;
        
//         if ( !(i in memo) ) {
//             memo[i] = 0;
//             if (s[i] !== "0") {
//                 memo[i] += dp(i+1);
//                 if (i < s.length - 1 && s.slice(i, i+2) < 27) memo[i] += dp(i+2);
//             }
//         }
        
//         return memo[i]
//     }
//     return dp(0);
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