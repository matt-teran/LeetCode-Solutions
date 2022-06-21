/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    let n = jobDifficulty.length;
    if (n < d) return -1;
    
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp.push(new Array(d + 1).fill(Infinity))
    }
    
    // Set base cases
    dp[n - 1][d] = jobDifficulty[n - 1];
    
    // On the last day, we must schedule all remaining jobs, so dp[i][d]
    // is the maximum difficulty job remaining
    for (let i = n - 2; i >= 0; i--) {
        dp[i][d] = Math.max(dp[i + 1][d], jobDifficulty[i]);
    }
    
    for (let day = d - 1; day > 0; day--) {
        for (let i = day - 1; i < n - (d - day); i++) {
            let hardest = 0;
            // Iterate through the options and choose the best
            for (let j = i; j < n - (d - day); j++) {
                hardest = Math.max(hardest, jobDifficulty[j]);
                // Recurrence relation
                dp[i][day] = Math.min(dp[i][day], hardest + dp[j + 1][day + 1]);
            }
        }
    }
    
    return dp[0][1];
};

// base case
// if more days than jobs
// if no more jobs remaining


// recurrence relation
// dp(i, d) === min( dp(i + 1, d) or dp(i + 1, d - 1)

// function
// dp(i, d) => total

// state variables
// • index of jobDifficulty - jobs completed
// • days remaining
// • total job difficulty

// options per recursion
// • include job 
// 