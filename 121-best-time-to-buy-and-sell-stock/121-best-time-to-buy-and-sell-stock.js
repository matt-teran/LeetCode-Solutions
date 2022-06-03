/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let l = 0;
    let r = 1;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            let profit = prices[r] - prices[l];
            maxProfit = Math.max(profit, maxProfit);
        } else {
            l = r;
        }
        r++;
    }
    return maxProfit;
};