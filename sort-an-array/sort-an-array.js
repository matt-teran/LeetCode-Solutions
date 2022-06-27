/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const mergeSort = (nums) => {
        if (nums.length < 2) return nums;
        let pivot = Math.floor(nums.length / 2);
        let left = mergeSort(nums.slice(0,pivot));
        let right = mergeSort(nums.slice(pivot));
        
        return merge(left, right);
    }
    
    const merge = (left, right) => {
        const result = [];
        let l = 0;
        let r = 0;
        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                result.push(left[l]);
                l++;
            } else {
                result.push(right[r]);
                r++;
            }
        }
        result.push(...left.slice(l));
        result.push(...right.slice(r));
        
        return result;
    }
    
    return mergeSort(nums);
};