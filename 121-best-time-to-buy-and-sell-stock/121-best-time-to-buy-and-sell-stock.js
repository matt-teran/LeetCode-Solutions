/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let l = 0;
    for (let r = 0; r < prices.length; r++) {
        if (0 > prices[r] - prices[l]) {
            l = r;
        }
        maxProfit = Math.max(maxProfit, prices[r] - prices[l]);
    }
    return maxProfit;
};