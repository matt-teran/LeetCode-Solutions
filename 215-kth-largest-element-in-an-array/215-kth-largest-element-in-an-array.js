/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (nums.length === 1) return nums[0];
    // reassign k to be the index of the kth largest element in a sorted array
    k = nums.length - k;
    // use quick select alg to find kth largest el
    
    const quickSelect = (l, r) => {
        // set pointer to left most el
        let pointer = l;
        // set pivot to right most el
        let pivot = nums[r];
        // loop through array
        for (let i = l; i < r; i++) {
            // if itn. is less than pivot, swap pointer and itn. vals && increment pointer
            if (nums[i] <= pivot) {
                let swap = nums[pointer];
                nums[pointer] = nums[i];
                nums[i] = swap;
                pointer++;
            }
        }
        // after loop terminates => swap pivot w/ pointer
        let swap = nums[pointer];
        nums[pointer] = nums[r];
        nums[r] = swap;
        
        // if k value is less than pivot value => repeat quick select on (l, pivot - 1)
        if (pointer > k) {
            return quickSelect(l, pointer - 1);
        } else if (pointer < k) {
            // else if k value is greater than pivot value => repeat (pivot + 1, r)
            return quickSelect(pointer + 1, r);
        } else {
            // else return pivot value
            console.log(pointer);
            return nums[pointer];
        }
        
    }
    return quickSelect(0, nums.length - 1);
};