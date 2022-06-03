/**
 * @param {string} s
 * @return {number}
 */

// inputs: string of chars (any)
// output: integer (length of longest substring w/o dups)
// constraints: na
// edge cases: string length is 0
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    
    // set two pointers, i @ 0, j @ 1
    let i = 0;
    let j = 0;
    let hashset = new Set();
    let result = 0;
    for (j; j < s.length; j++) {
        while (hashset.has(s[j])) {
            hashset.delete(s[i]);
            i++;
        }
        hashset.add(s[j]);
        result = Math.max(result, j - i + 1);
    }
    return result;
};