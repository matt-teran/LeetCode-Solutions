/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    const ROWS = rooms.length;
    const COLS = rooms[0].length;
    const INF = 2147483647;
    const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
    
    const q = [];
    let distance = 1;
    
    for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
            if (rooms[r][c] === 0) {
                q.push([r, c]);
            }
        }
    }
    
    for (; q.length; distance++) {
        for (let i = q.length; i > 0; i--) {
            const [row, col] = q.shift();
            
            for (const [dr, dc] of DIR) {
                const [r, c] = [row + dr, col + dc];
                
                if (rooms?.[r]?.[c] === INF) {
                    rooms[r][c] = distance;
                    q.push([r, c]);
                }
            }
        }
    }
    
};