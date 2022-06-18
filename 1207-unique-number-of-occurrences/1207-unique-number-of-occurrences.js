/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hash = {};
    const set = new Set();
    
    for (let num of arr) hash[num] ? hash[num]++ : hash[num] = 1;
    for (let occ of Object.values(hash)) {
        if (set.has(occ)) return false;
        set.add(occ);
    }
    return true;
};