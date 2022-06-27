/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const quickSort = (nums) => {
        let n = nums.length;
        qSort(nums, 0, n - 1);
    }
    const qSort = (nums, lo, hi) => {
        if (lo < hi) {
            let p = partition(nums, lo, hi);
            qSort(nums, lo, p - 1);
            qSort(nums, p + 1, hi);
        }
    }
    const partition = (nums, lo, hi) => {
        let pivot = nums[hi];
        let i = lo;
        for (let j = lo; j < hi; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
        }
        [nums[i], nums[hi]] = [nums[hi], nums[i]];
        return i;
    }
    quickSort(nums);
    return nums;
};