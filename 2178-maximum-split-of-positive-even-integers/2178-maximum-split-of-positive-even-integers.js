/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) return [];
    const result = [];
    let i = 2;
    
    while (finalSum >= i) {
        finalSum -= i;
        result.push(i);
        i += 2;
    }
    result[result.length - 1] += finalSum;
    return result;
    
    if (finalSum - i < 0) 
    
    return result;
};