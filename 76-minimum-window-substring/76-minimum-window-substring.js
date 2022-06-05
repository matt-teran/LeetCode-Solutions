/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// inputs: two strings. s length > t length
// output: substring of S
// constraints: slength > t length | s & t are upper and lowercase letters
// edge cases: 
// 

var minWindow = function(s, t) {
    if (t === "" || t.length > s.length) return "";
    
    let window = {};
    let countT = {};
    
    for (let char of t) {
        countT[char] ? countT[char]++ : countT[char] = 1;
    }
    let have = 0;
    let need = Object.keys(countT).length;
    let result = [-1, -1];
    let resultLength = Infinity;
    let l = 0;
    for (let r = 0; r < s.length; r++) {
        window[s[r]] ? window[s[r]]++ : window[s[r]] = 1;
        if (s[r] in countT && countT[s[r]] === window[s[r]]) {
            have++;
            while (have === need) {
                if (r - l + 1 < resultLength) {
                    result = [l, r];
                    resultLength = r - l + 1;
                } 
                window[s[l]]--;
                if (s[l] in countT && countT[s[l]] > window[s[l]]) {
                    have--;
                }
                l++;
            }
        }
    }

    return resultLength !== Infinity ? s.slice(result[0], result[1] + 1) : "";
};