/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//inputs: two strings
// output: bool
// constraints: both lengths > 0 | all lowercase
// edge case: ...nah

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
        if (!(k in tMap)) {
            return false;
        } else if (v !== tMap[k]) {
            return false;
        }
    }
    return true;
};

var checkInclusion = function(s1, s2) {
    // slide s1 length window across s2
    // for each itn. sort s2 and compare to s1 if true, return true
    let l = 0;
    for (let r = s1.length; r < s2.length; r++) {
        l = r - s1.length;
        if (isAnagram(s1, s2.slice(l, r))) return true;
    }
    if (isAnagram(s1, s2.slice(s2.length - s1.length))) return true;
    return false;
};