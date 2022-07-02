/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (const [start, end] of intervals.slice(1)) {
        const lastEnd = result.at(-1)[1];
        
        if (start <= lastEnd) {
            result.at(-1)[1] = Math.max(end, lastEnd);
        } else {
            result.push([start, end]);
        }
    }
    
    return result;
};