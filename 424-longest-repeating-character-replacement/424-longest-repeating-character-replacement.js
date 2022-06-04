/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// inputs: string of uppercase english letters, integer (number of operations)
// output: longest substring after performing k operations
// constraints: s is only uppercase english letters | string length > 0
// edge cases: k is 0
var characterReplacement = function(s, k) {
    let count = {};
    let l = 0;
    let r = 0;
    let result = 0;
    let maxFreq = 0
    
    for (r; r < s.length; r++) {
        count[s[r]] = 1 + (count[s[r]] || 0);
        maxFreq = Math.max(maxFreq, count[s[r]]);
        while (r - l + 1 - maxFreq > k) {
            count[s[l]]--;
            l++;
        }
        result = Math.max(result, r - l + 1);
    }
    return result;
};