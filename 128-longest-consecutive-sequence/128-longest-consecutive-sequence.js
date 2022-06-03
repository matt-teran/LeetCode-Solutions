/**
 * @param {number[]} nums
 * @return {number}
 */
// inputs: array of integers
// outpput: integer
// constraints: array len > 0
// edge cases: len of 0
var longestConsecutive = function(nums) {
    let count = 0;
    let hashset = new Set(nums);
    let startSet = new Set();

    for (let num of nums) {
        if (!hashset.has(num - 1)) startSet.add(num);
    }
    for (let num of startSet) {
        let currentCount = 1
        let check = num + 1;
        while (hashset.has(check)) {
            currentCount++;
            check++;
        }
        if (currentCount > count) count = currentCount;
    }
    return count;
};