/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// inputs: array of integers, integer 
// output: array of integers
// constraints array length > 0 | k <= array
// edge cases.............
var maxSlidingWindow = function(nums, k) {
    // find max num of first k nums, push to result
    // slide through nums
    let result = [];
    let deck = [];
    let l = 0;
    for (let r = 0; r < nums.length; r++) {
        while (deck.length && nums[deck[deck.length - 1]] < nums[r]) {
            deck.pop();
        }
        deck.push(r);
        
        if (l > deck[0]) deck.shift();
        
        if (r + 1 >= k) {
            result.push(nums[deck[0]]);
            l++;
        }
    }
    // push max num to result
    // return result
    return result;
};