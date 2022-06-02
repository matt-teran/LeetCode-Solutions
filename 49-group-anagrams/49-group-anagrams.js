/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// inputs: array of strings
// output: array of arrays containing strings | grouped by anagrams
// constraints: string length > 0 | all lowercase letters
// edge cases: empty array of strings | array len 1
// var groupAnagrams = function(strs) {
//     if (strs.length === 1) return [strs];
//     let map = {};
//     // sort str, set it in the map as map[sort] = [unsorted]
//     for (let i = 0; i < strs.length; i++) {
//         let count = new Array(26).fill(0);
        
//         for (let j = 0; j < strs[i].length; j++) {
//             // console.log(strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0));
//             count[strs[i][j].charCodeAt() - 97]++;
//         }
//         // console.log(count.join());
//         let k = count.join('#')
//         if (map[k]) {
//             map[count.join('')].push(strs[i]) 
//         } else {
//             map[count.join('')] = [strs[i]];
//         }
//     }
//     // return the values
//     // console.log(map);
//     return Object.values(map);
// };
// O(n^2 * log n)

var groupAnagrams = function(strs) {
    let res = {};
    for (let str of strs) {
        let count = new Array(26).fill(0);
        for (let char of str) count[char.charCodeAt()-97]++;
        let key = count.join("#");
        res[key] ? res[key].push(str) : res[key] = [str];
    }
    return Object.values(res);
};