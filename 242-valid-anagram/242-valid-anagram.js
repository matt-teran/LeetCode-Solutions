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
    //compare lengths, if not same, return false
    if (s.length !== t.length) return false;
    // create a hashmap of the freq of characters in both strings
    let sMap = {};
    let tMap = {};
    for (let i = 0; i < s.length; i++) {
        s[i] in sMap ? sMap[s[i]]++ : sMap[s[i]] = 1;
        t[i] in tMap ? tMap[t[i]]++ : tMap[t[i]] = 1;
    }
    // compare hashmaps, if any properties are different, return false
    for (const [k, v] of Object.entries(sMap)) {
        if (!(k in tMap) || v !== tMap[k]) {
            return false;
        }
    }
    return true;
};