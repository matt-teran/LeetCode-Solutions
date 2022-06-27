/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length < 2) return nums;
    let pivot = Math.floor(nums.length / 2);
    let left = sortArray(nums.slice(0,pivot));
    let right = sortArray(nums.slice(pivot));

    return merge(left, right);
};

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
        l < left.length && result.push(...left.slice(l));
        r < right.length && result.push(...right.slice(r));
        
        return result;
    }