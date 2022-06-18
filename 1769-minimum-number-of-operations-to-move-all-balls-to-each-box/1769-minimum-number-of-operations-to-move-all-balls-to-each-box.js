/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let locations = [];
    let result = [];
    for (let i = 0; i < boxes.length; i++) boxes[i] === '1' && locations.push(i);
    
    for (let i = 0; i < boxes.length; i++) {
        result.push(locations.reduce((acc, cur) => acc + Math.abs(cur - i), 0));
    }
    return result;
};