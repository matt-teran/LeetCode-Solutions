/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let result = 0;
    
    const expandAroundCenter = (l, r) => {
        while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
            result++;
            r++;
            l--;
        }
        return;
    }
    
    for (let i = 0; i < s.length; i++) {
        expandAroundCenter(i, i)
        expandAroundCenter(i, i+1);
    }
    
    return result;
};

