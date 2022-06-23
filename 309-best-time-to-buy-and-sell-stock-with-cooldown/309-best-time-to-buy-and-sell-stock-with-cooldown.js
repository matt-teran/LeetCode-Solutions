/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const n = prices.length;
    
    const dp = [];
    for (let i = 0; i <= n; i++) dp.push(new Array(3).fill(0));
    
    for (let i = n-1; i > -1; i--) {
        for (let status = 0; status < 3; status++) {
            let doSomething;
            let doNothing;
            if (status === 0) {
                doNothing = dp[i+1][status];
                doSomething = -prices[i] + dp[i+1][2];
            } else if (status === 1) {
                doSomething = dp[i+1][0];
                doNothing = dp[i+1][0];
            } else {
                doSomething = prices[i] + dp[i+1][1];
                doNothing = dp[i+1][status];
            }
            dp[i][status] = Math.max(doSomething, doNothing);
        }
    }
    return dp[0][0];
};

// function

// base case

// recurrence relation

// state variables
// • status - buying selling or cooling down
//   • -1 - buying
//.  • 0 - cooling down
//.  • 1 - selling
// • index of price