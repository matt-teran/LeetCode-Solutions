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
    
    var check = (k) => {
        let n = h;
        for (let pile of piles) {
            n -= Math.ceil(pile/k);
        }
        return n > -1;
    }
    // console.log(check(6));
    while (l <= r) {
        console.log(l,r);
        let m = Math.floor((r - l) / 2) + l;
        
        if (check(m)) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    
    return l;
};