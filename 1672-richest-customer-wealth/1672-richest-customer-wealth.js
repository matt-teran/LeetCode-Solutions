/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    return Math.max(...accounts.map(user => user.reduce((acc, bank) => acc + bank, 0)))
};