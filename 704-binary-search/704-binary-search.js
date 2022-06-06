/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let prev = [];
    const bSearch = (l, r) => {
        let m = Math.floor((l + r) / 2);
        if (prev.length > 1 && prev[prev.length - 2] === m) return -1;
        prev.push(m)
        if (nums[m] === target) {
            return m;
        } else if (nums[m] < target) {
            console.log(l, r);
            return bSearch(Math.ceil((l + r)/ 2), r);
        } else {
            return bSearch(l, m);
        }
    }
    return bSearch(0, nums.length - 1);
    // select middle num
    // if num < target, search upper half
    // if num > target search lower half
    // if num === target, return index
};