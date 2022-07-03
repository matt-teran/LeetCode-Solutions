/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    const minutes = timePoints.map(time => {
        return time.slice(0,2) * 60 + Number(time.slice(3));
    });
    minutes.sort((a,b) => a - b);
    minutes.push(minutes[0] + 60 * 24);
    
    let result = Infinity;
    for (let i = 1; i < minutes.length; i++) {
        result = Math.min(result, minutes[i] - minutes[i-1]);
    }
    return result;
};