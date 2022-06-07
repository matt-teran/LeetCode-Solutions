/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// inputs: string, string
// output: boolean 
// constraints: string lengths > 0 | all lowercase letters
// edge cases: na
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let countS = new Array(26).fill(0);
    let countT = new Array(26).fill(0);
    
    for (let i = 0; i < s.length; i++) {
        countS[s[i].charCodeAt() - 97]++
        countT[t[i].charCodeAt() - 97]++
    }
    for (let i = 0; i < countS.length; i++) {
        if (countS[i] !== countT[i]) return false;
    }
    return true;
}