/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) return [];
    
    const result = [];
    let additive = 2;
    while (finalSum >= additive) {
        finalSum -= additive;
        result.push(additive);
        additive += 2;
    }
    
    result[result.length - 1] += finalSum;
    return result;
};