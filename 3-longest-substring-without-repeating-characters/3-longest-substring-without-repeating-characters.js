/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let count = {}
    
    const isDup = () => {
        for (let char of Object.values(count)) if (char > 1) return true;
    }
    
    let result = 0;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        count[s[r]] ? count[s[r]]++ : count[s[r]] = 1;
        if(isDup()) {
            count[s[l]]--;
            l++
        } else {
            result++;
        }
    }
    return result;
};