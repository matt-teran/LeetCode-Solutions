/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [0];
    
    for (let i = 1; i <= n; i++) {
        result.push(result[i >> 1] + (i & 1));
    }
    return result;
};
// 1011
// [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]
// [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]