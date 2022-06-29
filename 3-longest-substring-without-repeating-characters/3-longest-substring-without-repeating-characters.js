/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let seen = new Set();
    let result = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        while (seen.has(s[r])) {
            seen.delete(s[l]);
            l++;
        }
        seen.add(s[r]);
        result = Math.max(result, r - l + 1);
    }
    return result;
};