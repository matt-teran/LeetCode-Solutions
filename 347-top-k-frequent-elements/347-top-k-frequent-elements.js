/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// inputs: array, integer
// output: array of k most frequesnt integers
// constraints: nums length > 0 | k > 0
// edge cases: na
var topKFrequent = function(nums, k) {
    // keep track of freq w/ hashmap
    let map = {};
    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }
    // create array of k-v pairs/
    return Object.entries(map).map(([k, v]) => [k, v]).sort((a, b) => b[1] - a[1]).slice(0, k).map(num => num[0]);
    // sort in descending order
    // return first k elements in array
};