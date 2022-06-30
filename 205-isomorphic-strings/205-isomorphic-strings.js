/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let sMap = {};
    let tMap = {};
    let sCount = 0;
    let tCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (!(s[i] in sMap)) {
            sMap[s[i]] = sCount;
            sCount++;
        }
        if (!(t[i] in tMap)) {
            tMap[t[i]] = tCount;
            tCount++;
        }
        
        if (sMap[s[i]] !== tMap[t[i]]) return false;
    }
    return true;
};