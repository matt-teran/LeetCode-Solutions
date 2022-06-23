/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const memo = {};
    
    const dp = (i, status) => {
        if (i === prices.length) return 0;
        
        if ( !(i in memo) ) memo[i] = {};
        
        if ( !(status in memo[i]) ) {
            let doSomething;
            let doNothing;
            if (status === -1) {
                doNothing = dp(i+1, status);
                doSomething = -prices[i] + dp(i+1, 1);
            } else if (status === 0) {
                doSomething = dp(i+1, -1);
                doNothing = dp(i+1, -1);
            } else {
                doSomething = prices[i] + dp(i+1, 0);
                doNothing = dp(i+1, status);
            }
            memo[i][status] = Math.max(doSomething, doNothing)
        }
        return memo[i][status];
    }
    
    return dp(0, -1);
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