/**
 * @param {number} finalSum
 * @return {number[]}
 */
var maximumEvenSplit = function(finalSum) {
    if (finalSum % 2) return [];

    let current = [];
    let i = 2;
    let sumRemaining = finalSum;

    // while using the next number will not overshoot the target sum
    while (sumRemaining - i >= 0) {
        current.push(i);
        sumRemaining -= i;
        i += 2;
    }
    // if we hit it exactly, return
    if (sumRemaining === 0) return current;

    // next number to be added needs to be modified
    if (sumRemaining <= current.at(-1)) { // last num should be modified otherwise we will have
        current[current.length - 1] = current.at(-1) + sumRemaining;
    } else {
        current.push(sumRemaining);
    }
    return current;
};