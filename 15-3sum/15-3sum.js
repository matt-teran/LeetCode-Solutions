// inputs: integer array
// output: integer triplets that add up to 0
// constraints: na
// edge cases: nums length 0

var threeSum = function (nums) {
    if (nums.length < 3) return [];
    let result = [];
    // sort array
    nums.sort((a, b) => a - b);
    // loop through array
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let target = 0 - nums[i];
        // for each itn. set the target to be 0 - itn
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] > target) {
                k--;
            } else if (nums[j] + nums[k] < target) {
                j++;
            } else {
                result.push([nums[i], nums[j], nums[k]]);
                j++;
                while (nums[j] === nums[j - 1] && j < k) {
                    j++;
                }
            }
        }
        // use two pointers in sub array to find target
        // when target is reached, push nums to result and increment i    
    }
    //remove duplicates
    
    return result;
};
// [-1,0,1,2,-1,-4]
// [-4, -1, -1, 0, 1, 2]
// 0