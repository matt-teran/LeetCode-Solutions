/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var removeOnes = function(grid) {
    const row = grid[0].join('');
    const invRow = grid[0].map(i => i ^ 1).join('');
    
    for (let r of grid) {
        let joinedRow = r.join('');
        if (joinedRow !== row && joinedRow !== invRow) return false;
    }
    
    return true;
};