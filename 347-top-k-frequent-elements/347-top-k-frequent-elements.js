/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    const result = []
    for (let num of nums) count[num] ? count[num]++ : count[num] = 1;
    const utility = []
    for (let [num, freq] of Object.entries(count)) utility.push([num, freq]);
    utility.sort((a,b) => b[1] - a[1]);

    return utility.map(([num, freq]) => num).slice(0, k);
};