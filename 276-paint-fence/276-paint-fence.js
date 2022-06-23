/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, k) {
    if (n === 1) return k;
    if (n === 2) return k*k;
    
    const memo = {};
    
    const dp = (i, c, count) => {
        if (count === 2) return 0;
        if (i === n-1) return 1;
        
        if ( !(i in memo) ) memo[i] = {};
        if ( !(c in memo[i]) ) memo[i][c] = {};
        if ( !(count in memo[i][c]) ) {
            memo[i][c][count] = 0;

            for (let color = 0; color < k; color++) {
                if (color === c) {
                    memo[i][c][count] += dp(i+1, color, count+1)    
                } else {
                    memo[i][c][count] += dp(i+1, color, 0)
                }
                
                
            }
        }
        return memo[i][c][count];
    }
    
    let result = 0;
    for (let i = 0; i < k; i++) {
        result += dp(0, i, 0);
    }
    // console.log(memo);
    return result;
};