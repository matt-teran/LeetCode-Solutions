/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    // Sort times by hours
    timePoints.sort();
    
    // Convert times to minutes
    let minutes = timePoints.map(time => Number(time.slice(0,2)) * 60 + Number(time.slice(3)));
    
    // Make the array of minutes circular by pushing the first value + 1440 (24 hours in minutes)
    minutes.push(minutes[0] + 1440);
    
    let result = minutes[1] - minutes[0];
    for (let i = 2; i < minutes.length; i++) result = Math.min(result, minutes[i] - minutes[i-1]);
    return result;
};