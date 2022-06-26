/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const ROWS = rooms.length;
    const COLS = rooms[0].length;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    const INF = 2147483647;
    const q = [];
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (rooms[r][c] === 0) q.push([r,c]);
        }
    }
    
    let distance = 0;
    while (q.length) {
        distance++;
        let qLen = q.length;
        for (let i = 0; i < qLen; i++) {
            let [row, col] = q.shift();
            for (let [dr,dc] of DIR) {
                let [r,c] = [row+dr,col+dc];
                if (rooms?.[r]?.[c] === INF) {
                    rooms[r][c] = distance;
                    q.push([r,c]);
                }
            }
        }
    }
};