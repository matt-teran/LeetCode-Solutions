/**
 * @param {string} s
 * @param {number} n
 * @return {boolean}
 */
var queryString = function(s, n) {
    for (;n;n--) {
        if (!s.includes(n.toString(2))) return false;
    }
    return true;
};