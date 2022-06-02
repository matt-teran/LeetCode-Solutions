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
    for (let i = 0; i < strs.length; i++) {
        let count = new Array(26).fill(0);
        
        for (let j = 0; j < strs[i].length; j++) {
            count[strs[i][j].charCodeAt() - 97]++;
        }
        
        let k = count.join('#')
        
        if (map[k]) {
            map[k].push(strs[i]) 
        } else {
            map[k] = [strs[i]];
        }
    }
    return Object.values(map);
};