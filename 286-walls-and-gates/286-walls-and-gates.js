/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let distance = 0;
    let rows = rooms.length;
    let cols = rooms[0].length;
    let gates = [];

    const bfs = (gates) => {
      let q = [...gates];
      const directions = [[1,0],[-1,0],[0,1],[0,-1]];

      while(q.length) {
        distance++;
        let qLen = q.length;

        for (let i = 0; i < qLen; i++) {
          let [row, col] = q.shift();

          for (let [dr, dc] of directions) {
            let [r, c] = [row + dr, col + dc];

            if (0 <= r && r < rows &&
                0 <= c && c < cols &&
                rooms[r][c] === 2147483647) {
                  q.push([r,c]);
                  rooms[r][c] = distance;
                }
          }
        }
      }
    }
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (rooms[r][c] === 0) gates.push([r, c]);
      }
    }
    bfs(gates);
};