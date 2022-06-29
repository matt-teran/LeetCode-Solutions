/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const count = {};
    for (let num of nums) {
        count[num] ? count[num]++ : count[num] = 1;
    }
    const utility = Object.entries(count);
    console.log(utility);
    utility.sort((a,b) => b[1] - a[1]);
    return utility.map(el => Number(el[0])).slice(0,k);
};