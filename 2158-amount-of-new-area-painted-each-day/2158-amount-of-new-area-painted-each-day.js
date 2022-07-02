/**
 * @param {number[][]} paint
 * @return {number[]}
 */
var amountPainted = function(paint) {
    let line = Array(50001).fill(0);
    let result = Array(paint.length).fill(0);

    for (let i = 0; i < paint.length; i++) {
        let [start, end] = paint[i];
        while (start < end) {
            let jump = Math.max(start + 1, line[start]);
            if (line[start] === 0) result[i]++;
            line[start] = Math.max(line[start], end);
            start = jump;
        }
    }
    return result;
};