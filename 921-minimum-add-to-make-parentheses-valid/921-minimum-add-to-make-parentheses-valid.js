/**
 * @param {string} s
 * @return {number} ()))((
 */

// inputs: string of paran
// output: integer
// constraints: all chars are ( or ) | 1 <= len <= 1000
// edge cases: na
var minAddToMakeValid = function(s) {
    let prev = s;
    let current = s.replaceAll('()', '');
    
    while (current !== prev) {
        prev = current;
        current = prev.replaceAll('()', '');
    }
    
    return current.length;
};