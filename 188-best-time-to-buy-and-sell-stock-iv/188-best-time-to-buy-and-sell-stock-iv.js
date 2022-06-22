/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (k, prices) => {
    const n = prices.length;
    const dp = [];
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        for (let j = 0; j <= k; j++) {
            dp[i][j] = new Array(2).fill(0);
        }
    }
	for (let i = n - 1; i >= 0; i--) {
        for (let transactionsRemaining = 1; transactionsRemaining <= k; transactionsRemaining++) {
            for (let holding = 0; holding < 2; holding++) {
                let doNothing = dp[i + 1][transactionsRemaining][holding];
                let doSomething;
                if (holding == 1) {
                    // Sell stock
                    doSomething = prices[i] + dp[i + 1][transactionsRemaining - 1][0];
                } else {
                    // Buy stock
                    doSomething = -prices[i] + dp[i + 1][transactionsRemaining][1];
                }

                // Recurrence relation
                dp[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
            }
        }
    }

    return dp[0][k][0];
}
