/**
 * @param {string} n
 * @return {number}
 */
var minPartitions = function(n) {
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        if (Number(n[i]) > result) result = Number(n[i]);
    }
    return result;
};