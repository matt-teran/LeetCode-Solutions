/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
    let minusOne = cost[1];
    let minusTwo = cost[0];
    
    for (let i = 2; i < cost.length; i++) {
        [minusOne, minusTwo] = [cost[i] + Math.min(minusOne, minusTwo), minusOne];
    }

    return minusOne;
};