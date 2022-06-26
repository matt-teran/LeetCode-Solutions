/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b) => b - a);
    const n = nums.length;
    let result = 1;
    
    for (let i = 0; i < n - 1; i++) {
        if (n - i <= result) return result;
        let remainingChanges = k;
        let maybeResult = 0;
        for (let j = i; j < n; j++) {
            let diff = nums[i] - nums[j];
            if (diff <= remainingChanges) {
                remainingChanges -= diff;
                maybeResult++;
            } else {
                break;
            }
        }
        result = Math.max(result, maybeResult);
    }
    
    return result;
};