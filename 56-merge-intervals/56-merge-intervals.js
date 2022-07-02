/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    const result = [];
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] < intervals[i+1][0]) {
            result.push(intervals[i]);
        } else {
            intervals[i+1] = [Math.min(intervals[i][0], intervals[i+1][0]), Math.max(intervals[i][1], intervals[i+1][1])]
        }
    }
    result.push(intervals.at(-1));
    return result;
};