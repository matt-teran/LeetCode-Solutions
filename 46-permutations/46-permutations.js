/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    if (nums.length === 1) return [nums.slice()];
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums.shift();
        let perms = permute(nums);

        for (const perm of perms)  {
            perm.push(num);
        }
        result.push(...perms);
        nums.push(num);
    }
    
    return result;
};