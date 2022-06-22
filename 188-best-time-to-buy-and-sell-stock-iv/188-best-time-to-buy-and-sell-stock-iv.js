/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = (k, prices) => {
	const memo = {};
	const dp = (i, transactionsRemaining, holding) => {
		// Base case
		if (transactionsRemaining === 0 || i === prices.length) return 0;
 
		if ( !(i in memo) ) memo[i] = {};
		if ( !(transactionsRemaining in memo[i]) ) memo[i][transactionsRemaining] = {};
		if ( !(holding in memo[i][transactionsRemaining]) ) {
			let doNothing = dp(i + 1, transactionsRemaining, holding);
			let doSomething = 0;
 
		if (holding) {
				// Sell stock
				doSomething = prices[i] + dp(i + 1, transactionsRemaining - 1, 0);
		} else {
				// Buy stock
				doSomething = -prices[i] + dp(i + 1, transactionsRemaining, 1);
		}
		// Recurrence relation
			memo[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
		}
		return memo[i][transactionsRemaining][holding];
	}
	return dp(0, k, 0);
}
