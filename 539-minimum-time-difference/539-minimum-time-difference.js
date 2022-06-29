/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints.sort();
    let minutes = timePoints.map(el => Number(el.slice(0,2)) * 60 + Number(el.slice(3)));
    
    minutes.push(minutes[0] + 1440);
    let min = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        min = Math.min(min, minutes[i] - minutes[i-1]);
    }
    return min;
};