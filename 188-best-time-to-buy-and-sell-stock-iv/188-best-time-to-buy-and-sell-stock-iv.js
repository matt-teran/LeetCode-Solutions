/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length === 0 || k === 0) return 0;

    const memo = {};
    
    const dp = (i, t) => {
        if (t === k) return 0;
        if (prices.length - 1 === i) {
            return t % 1 ? prices.at(-1) : 0;
        };
        
        if ( !(i in memo) ) memo[i] = {};
        if ( !(t in memo[i]) ) {
            const additive = t % 1 ? prices[i] : -prices[i];
            memo[i][t] = Math.max(dp(i + 1, t + 0.5) + additive, dp(i + 1, t));
        }
        
        return memo[i][t];
        
        
        
        // return Math.max(dp(i + 1, t + 0.5) + additive, dp(i + 1, t));
    }
    
    return dp(0, 0);
};

// dp function
// dp(i, t) => max profit for n prices and k transactions

// recurrence relation
// dp(i, t) === Max of:
// • dp(i + 1, t + 0.5) + (prices[i] if selling, -prices[i] if buying)
// • dp(i + 1, t);

// base case
// • if only one price remains && not holding => return 0
// • all transactions made => return 0

// state variables
// • # number of transactions
// • index of price
// • profit