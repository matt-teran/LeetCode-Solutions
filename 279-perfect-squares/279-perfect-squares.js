/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let m = Math.floor(Math.sqrt(n));
    
    const memo = {};
    
    const dp = (i, sum) => {
        if (sum === n) return 0;
        if (sum > n) return Infinity;
        if (i === 0) return Infinity;
        
        if (!(i in memo)) memo[i] = {};
        if (!(sum in memo[i])) {
            const multiple = Math.floor((n - sum) / i ** 2);
            const newSum = sum + i ** 2 * multiple;
            
            memo[i][sum] = Math.min(dp(i-1,sum), multiple + dp(i-1, newSum));
        }
        
        return memo[i][sum];
    };
    
    return dp(m, 0);
};