/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const recurse = (i) => {
        if (i === s.length) return;
        recurse(i+1)
        s.push(s[i]);
    }
    recurse(0);
    s.splice(0, s.length/2);
};