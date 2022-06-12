/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    if (gas.reduce((prev, x) => prev + x) < cost.reduce((p,x) => p + x)) return -1;
    
    let result = 0;
    let total = 0;
    for (let i = 0; i < gas.length; i++) {
        total += gas[i] - cost[i];
        
        if (total < 0) {
            total = 0;
            result = i + 1;
        }
    }
    return result;
};