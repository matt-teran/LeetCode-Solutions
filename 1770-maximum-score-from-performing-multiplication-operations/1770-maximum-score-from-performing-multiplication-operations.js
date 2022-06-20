/**
 * @param {number[]} nums
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function(nums, multipliers) {
    let n = nums.length;
    let m = multipliers.length;
    
    let tabularDP = [];
    for (let i = 0; i <= m; i++) {
        tabularDP.push(new Array(m + 1).fill(0));
    }

    // tabularDP[m][m] = 0;
    for (let i = m - 1; i >= 0; i--){
        for (let left = i; left >= 0; left--) {
            let mult = multipliers[i];
            let right = n - 1 - (i - left);
            tabularDP[i][left] = Math.max(mult * nums[left] + tabularDP[i + 1][left + 1],
                        mult * nums[right] + tabularDP[i + 1][left]);
        }
    }
    
    return tabularDP[0][0];
};