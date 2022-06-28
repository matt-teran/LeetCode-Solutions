/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    // all rows need to be equal 010 === 101
    const newGrid = [];
    const normRow = grid[0].join('');
    const invRow = grid[0].map(i => i ^ 1).join('');
    for (let row of grid) newGrid.push(row.join(''));
    
    
    for (let row of newGrid) {
        if (row !== normRow && row !== invRow) return false;
    }

    return true;
};