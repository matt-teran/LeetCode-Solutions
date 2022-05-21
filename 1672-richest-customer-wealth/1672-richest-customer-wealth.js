/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let largest = accounts[0].reduce((acc, x) => acc + x, 0);
    
    for (let i = 1; i < accounts.length; i++) {
        let sum = accounts[i].reduce((acc, x) => acc + x, 0);
        if (sum > largest) largest = sum;
    }
    
    return largest;
};