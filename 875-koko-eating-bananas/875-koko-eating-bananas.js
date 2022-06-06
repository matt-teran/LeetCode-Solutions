/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// inputs: integer array banana piles, integer hours
// output: integer
// constraints: at least one pile | piles.length <= h | at least one banana
// edge cases: na
var minEatingSpeed = function(piles, h) {
    let l = 1;
    let r = Math.max(...piles);
    let result = r;
    
    while (l <= r) {
        let k = Math.floor((l + r) / 2);
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile / k)
        }
        
        if (hours <= h) {
            r = k - 1;
            result = k;
        } else {
            l = k + 1;
        }
    }
    return result;
};

// [30,11,23,4,20]
// [4, 11, 20, 23, 30] 5
// 1,2,3,4,5,6,7,8