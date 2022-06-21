/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    const memo = {};
    const dp = (amt) => {
        if (amt === 0) return 0;
        // if (amt < 0) return -1;
        
        if (!(amt in memo)) {
            let best = Infinity;
            // let bestMultiple = Infinity
            for (let coin of coins) {
                if (coin > amt) continue;
                // let mult = Math.floor(amt / coin); 
                // console.log(best);
                best = Math.min(dp(amt - coin) + 1, best); 
            }
            memo[amt] = best
        }
        return memo[amt];
    }
    
    
    let ans = dp(amount);
    // console.log(memo);
    return ans === Infinity ? -1 : ans;
};

// base case
// amount === 0
// 

// recurrence relation
// dp(amount) = dp(amount - coin*mult)

// function
// total number of coins used

// state variables
// • index of coins
// • amount left
// • total thus far
// • num of coins used thus far
// • amount of money for this