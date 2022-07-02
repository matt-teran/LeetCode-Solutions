/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var numberOfPatterns = function(m, n) {
    let result = 0;
    const grid = [];
    for (let i = 0; i < 3; i++) grid.push(Array(3).fill(0));

    const backtrack = (count, prev) => {
        if (m <= count && count <= n) result++;
        if (count > n) return;
        const [a, b] = prev;
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (grid[i][j] === 1) continue;
                
                if (i === a && Math.abs(j - b) === 2 && grid[i][1] === 0) continue;
                if (j === b && Math.abs(i - a) === 2 && grid[1][j] === 0) continue;
                if (Math.abs(i-a) === 2 && Math.abs(j-b) === 2 && grid[1][1] === 0) continue;
                
                grid[i][j] = 1;
                backtrack(count+1, [i,j]);
                grid[i][j] = 0;
            }
        }
        
    }
    
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            grid[i][j] = 1;
            backtrack(1, [i,j]);
            grid[i][j] = 0;
        }
    }
    
    return result;
};