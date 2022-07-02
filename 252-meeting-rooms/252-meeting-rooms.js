/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
    if (!intervals.length) return true;
    intervals.sort((a,b) => a[0] - b[0]);
    let prevEnd = intervals[0][1];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prevEnd) return false;
        
        prevEnd = intervals[i][1];
    }
    
    return true;
};