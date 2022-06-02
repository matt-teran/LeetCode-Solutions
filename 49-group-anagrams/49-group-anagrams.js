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

    for (let str of strs) {
        let count = new Array(26).fill(0);
        
        for (let char of str) {
            count[char.charCodeAt() - 97]++;
        }
        // console.log(count.join());
        let k = count.join('#')
        console.log(k)
        
        if (map[k]) {
            map[k].push(str) 
        } else {
            map[k] = [str];
        }
    }
    // return the values
    // console.log(map);
    return Object.values(map);
};
// O(n^2 * log n)

// var groupAnagrams = function(strs) {
//     let res = {};
//     for (let str of strs) {
//         let count = new Array(26).fill(0);
//         for (let char of str) count[char.charCodeAt()-97]++;
//         let key = count.join("#");
//         res[key] ? res[key].push(str) : res[key] = [str];
//     }
//     return Object.values(res);
// };