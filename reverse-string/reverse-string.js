/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const recurse = (i) => {
        if (i === s.length) return;
        recurse(i+1)
        s.splice(s.length, 0, s.splice(i,1)[0]);
    }
    recurse(0);
};