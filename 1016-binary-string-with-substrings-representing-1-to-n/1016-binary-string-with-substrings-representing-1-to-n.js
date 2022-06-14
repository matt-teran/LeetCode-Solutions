/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    while (n) {
        if (!s.includes(n.toString(2))) return false;
        n--;
    }
    return true;
};