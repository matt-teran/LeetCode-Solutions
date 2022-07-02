/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const start = intervals.map(i => i[0]).sort((a,b)=>a-b);
    const end = intervals.map(i => i[1]).sort((a,b)=>a-b);
    
    let [count, result, s, e] = [0,0,0,0];
    
    while (s < intervals.length) {
        if (start[s] < end[e]) {
            count++;
            s++;
        } else {
            count--;
            e++;
        }
        result = Math.max(result, count);
    }

    return result;
};