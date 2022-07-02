/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInt) {
    const result = [];
    
    for (let i = 0; i < intervals.length; i++) {
        if (newInt[1] < intervals[i][0]) {
            result.push(newInt, ...intervals.slice(i));
            return result;
        } else if (newInt[0] > intervals[i][1]) {
            result.push(intervals[i]);
        } else {
            newInt = [Math.min(newInt[0], intervals[i][0]), Math.max(newInt[1], intervals[i][1])];
        }
    }
    
    result.push(newInt);
    
    return result;
};