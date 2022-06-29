/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function(values) {
    let result = 0;
    let current = 0;
    for (let value of values) {
        result = Math.max(result, current+value);
        current = Math.max(current, value) - 1;
    }
    return result;
};
