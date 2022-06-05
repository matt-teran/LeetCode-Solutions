/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//inputs: two strings
// output: bool
// constraints: both lengths > 0 | all lowercase
// edge case: ...nah
var checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    // create a map for both strings
    // the map should be a count of which characters in the alphabet exist in the string
    let s1Map = new Array(26).fill(0);
    let s2Map = new Array(26).fill(0);
    
    for (let i = 0; i < s1.length; i++) {
        s1Map[s1[i].charCodeAt() - 97]++;
        s2Map[s2[i].charCodeAt() - 97]++;
    }
    // check how many matches there are in the two strings
    let matches = 0;
    for (let i = 0; i < s1Map.length; i++) {
        if (s1Map[i] === s2Map[i]) matches++;
    }
    if (matches === 26) return true;
    // loop through the rest of s2 w/ s1 size sliding window, removing the matches effect of the removed char, and adding the new char
    for (let r = s1.length; r < s2.length; r++) {
        let l = r - s1.length;
        // remove eff of prev 
        if (s2Map[s2[l].charCodeAt() - 97] === s1Map[s2[l].charCodeAt() - 97]) {
            s2Map[s2[l].charCodeAt() - 97]--;
            matches--;
        } else {
            s2Map[s2[l].charCodeAt() - 97]--;
            if (s2Map[s2[l].charCodeAt() - 97] === s1Map[s2[l].charCodeAt() - 97]) matches++;
        }
        // add eff of new
        if (s2Map[s2[r].charCodeAt() - 97] === s1Map[s2[r].charCodeAt() - 97]) {
            s2Map[s2[r].charCodeAt() - 97]++;
            matches--;
        } else {
            s2Map[s2[r].charCodeAt() - 97]++;
            if (s2Map[s2[r].charCodeAt() - 97] === s1Map[s2[r].charCodeAt() - 97]) matches++;
        }
        if (matches === 26) return true;
    }
    // if there ever exists 26 matches, return true
    // else return false
    
    return false;
};