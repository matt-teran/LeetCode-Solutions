/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    const line = Array(5 * 10 ** 4).fill(0);
    const result = Array(paint.length).fill(0);
    
    for (let i = 0; i < paint.length; i++) {
        let [start, end] = paint[i];
        while(start < end) {
            const jump = Math.max(line[start], start + 1);
            if (line[start] === 0) result[i]++;
            line[start] = end;
            start = jump;
        }
    }
    
    return result;
};