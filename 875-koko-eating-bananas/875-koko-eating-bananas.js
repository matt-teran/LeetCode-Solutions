/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    const check = (rate) => {
        let hours = 0;
        for (let pile of piles) {
            hours += Math.ceil(pile/rate);
            if (hours > h) return false;
        }
        return true;
    }
    
    let l = 1;
    let r = Math.max(...piles);
    let result = r;
    while (l<=r) {
        let m = Math.floor((r-l)/2) + l;
        
        if (check(m)) {
            r = m - 1;
            result = m;
        } else {
            l = m + 1;
        }
    }
    return result;
};