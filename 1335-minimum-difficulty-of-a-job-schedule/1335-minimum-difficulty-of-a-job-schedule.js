/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function(jobDifficulty, d) {
    let n = jobDifficulty.length;
    if (n < d) return -1;
    
    let hardestJobRemaining = new Array(n).fill(0);
    let hardestJob = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        hardestJob = Math.max(hardestJob, jobDifficulty[i]);
        hardestJobRemaining[i] = hardestJob;
    }
    
    const memo = {};
    
    const dp = (i, day) => {
        if (day === d) return hardestJobRemaining[i];
        
        if ( !(i in memo) ) memo[i] = {};
        
        if ( !(day in memo[i]) ) {
            let best = Infinity;
            let hardest = 0;
            // Iterate through the options and choose the best
            for (let j = i; j < n - (d - day); j++) {
                hardest = Math.max(hardest, jobDifficulty[j]);
                // Recurrence relation
                best = Math.min(best, hardest + dp(j + 1, day + 1));
            }
            memo[i][day] = best;
        }
        
        return memo[i][day];
    }    
    
    return dp(0, 1);
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