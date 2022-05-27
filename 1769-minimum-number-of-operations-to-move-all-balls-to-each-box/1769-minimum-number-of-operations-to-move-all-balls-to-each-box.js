/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    let result = [];
    
    for (let i = 0; i < boxes.length; i++) {
        let distance = 0;
        
        for (let j = 0; j < boxes.length; j++) {
            if (i !== j && boxes[j] === '1') {
                distance += Math.abs(i - j);
            };
        }
        
        result.push(distance);
    }
    
    return result;
};