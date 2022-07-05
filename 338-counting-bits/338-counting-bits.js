/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = Array(n + 1).fill(0); 
    
    let x = 0;
    let bit = 1;
    
    while (bit <= n) {
        while (x + bit <= n) {
            result[bit + x] = 1 + result[x];
            x++;
        }
        x = 0;
        bit <<= 1;
    }
    return result;
};
// 1011
// [0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4,1]
// [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6]