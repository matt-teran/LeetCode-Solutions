/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    
    if (nums.length === 1) return [nums.slice()];
    
    for (let i = 0; i < nums.length; i++) {
        let n = nums.shift();
        let perms = permute(nums);
        
        for (let perm of perms) {
            perm.push(n);
        }
        res.push(...perms);
        nums.push(n);
    }
    return res;
};