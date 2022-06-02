/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// inputs: array of strings
// output: array of arrays containing strings | grouped by anagrams
// constraints: string length > 0 | all lowercase letters
// edge cases: empty array of strings | array len 1
var groupAnagrams = function(strs) {
    if (strs.length === 1) return [strs];
    let map = {};
    // sort str, set it in the map as map[sort] = [unsorted]
    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split('').sort().join('');
        if (sorted in map) {
            map[sorted].push(strs[i]);
        } else {
            map[sorted] = [strs[i]];
        }
    }
    // return the values
    return Object.values(map);
};