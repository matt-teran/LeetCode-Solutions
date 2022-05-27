/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
    return boxes.split('').map((x, i) => {
        let distance = 0;
        let j = 0;
        while (j < boxes.length) {
            if (i !== j && boxes[j] === '1') {
                distance += Math.abs(i - j);
            };
            j++;
        }
        return distance;
    })
};