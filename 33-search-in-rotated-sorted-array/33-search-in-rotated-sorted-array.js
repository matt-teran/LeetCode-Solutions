/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    const findRotationIndex = (l,r) => {
        if (nums[l] < nums[r]) return 0;
        while (l <= r) {
            let m = Math.floor((r - l) / 2) + l;

            if (nums[m] > nums[m+1]) {
                return m + 1;
            } else if (nums[m] < nums[l]) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
    }
    const binarySearch = (l, r) => {
        while (l<=r) {
            let m = Math.floor((r - l) / 2) + l;
            if (nums[m] < target) {
                l = m + 1;
            } else if (nums[m] > target) {
                r = m - 1;
            } else {
                return m;
            }
        }
        return -1;
    }
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    let p = findRotationIndex(l,r);
    console.log(p);
    l = 0;
    r = nums.length - 1;
    if (p === 0) return binarySearch(l, r);
    if (nums[p] === target) return p;
    if (nums[0] > target) return binarySearch(p,r);
    return binarySearch(l, p);
    
    
    return findRotationIndex(0, nums.length - 1)
};