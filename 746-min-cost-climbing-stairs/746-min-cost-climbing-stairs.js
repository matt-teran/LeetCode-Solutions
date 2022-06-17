/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
    // let i = cost.length - 1;
//     while (i > -1) {
        
//     }
    for (let i = cost.length - 3; i > -1; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }
    return Math.min(cost[0], cost[1]);
};