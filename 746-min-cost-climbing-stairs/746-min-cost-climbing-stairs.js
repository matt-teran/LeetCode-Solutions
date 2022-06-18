/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    const memo = {};
    cost.push(0);
    const dp = (i) => {
        if (i < 2) return cost[i]; // base case
        
        if ( !(i in memo) ) memo[i] = cost[i] + Math.min(dp(i-1), dp(i-2)); // recurrence relation
        return memo[i]
    }
    return dp(cost.length - 1);
};