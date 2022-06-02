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
    let freq = Array.from(Array(nums.length + 1), () => new Array());
    for (let num of nums) {
        map[num] ? map[num]++ : map[num] = 1;
    }
    // create array of k-v pairs/
    // Object.entries(map).forEach(([n, c]) => {
    //     freq[c].push(n);
    // })
    for (const [n, c] of Object.entries(map)) {
        // console.log(freq);
        freq[c].push(n)
    }
    // console.log(map, freq);
    let result = [];
    for (let i = freq.length - 1; i > -1; i--) {
        for (let j = 0; j < freq[i].length; j++) {
            result.push(freq[i][j]);
            if (result.length === k) return result;
        }
    }
};

// O(3n * log n)