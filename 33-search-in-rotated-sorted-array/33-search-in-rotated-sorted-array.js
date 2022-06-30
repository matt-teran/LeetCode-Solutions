/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    
    const findRotationIndex = (l, r) => {
        if (nums[l] < nums[r]) return 0;
        while (l<=r) {
            let pivot = Math.floor((r - l) / 2) + l;
            if (nums[pivot] > nums[pivot + 1]) return pivot + 1;
            
            if (nums[pivot] < nums[l]) {
                r = pivot - 1;
            } else {
                l = pivot + 1;
            }
        }
    }
    const binarySearch = (l, r) => {
        while (l <= r) {
            let m = Math.floor((r - l)/2) + l;
            if (target < nums[m]) {
                r = m - 1;
            } else if (target > nums[m]) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return -1;
    }
    const p = findRotationIndex(l,r);
    console.log(p);
    if (nums.length === 1) return nums[0] === target ? 0 : -1;
    
    if (nums[p] === target) return p;
    if (p === 0) return binarySearch(0, nums.length - 1);
    if (target < nums[0]) return binarySearch(p, nums.length - 1);
    return binarySearch(0, p);
};
// [4,5,6,7,0,1,2]
// 1 