/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = [];
    let suffix = [];
    // • create prefix array
    for (let i = 0; i < nums.length; i++) {
        prefix.push(nums[i] * (prefix[i-1] !== undefined ? prefix[i - 1] : 1)); 
    }
    //  - loop through input
    //  - starting with one, multiply
    //    current itn. with prev el
    // • create suffix array
    nums.reverse();
    for (let i = 0; i < nums.length; i++){
        suffix.push(nums[i] * (suffix[i-1] !== undefined ? suffix[i - 1] : 1));
    }
    suffix.reverse();
    //  - reverse loop thru input
    //  - starting w/ one, multiply
    //    current itn. w/ prv el
    // • loop thru input, push product of prefix & suffix at i
    console.log(prefix, suffix)
    return nums.map((num, i) => (prefix[i- 1] !== undefined ? prefix[i - 1] : 1) * (suffix[i + 1] !== undefined ? suffix[i + 1] : 1));
    // • return
};