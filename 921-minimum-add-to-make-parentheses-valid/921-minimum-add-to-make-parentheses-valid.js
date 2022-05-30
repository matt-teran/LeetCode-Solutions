/**
 * @param {string} s
 * @return {number} ()))((
 */

// inputs: string of paran
// output: integer
// constraints: all chars are ( or ) | 1 <= len <= 1000
// edge cases: na
var minAddToMakeValid = function(s) {
    // keep track of fix count
    let fixes = 0;
    let status = 0;
    // loop thru string
    for (let i = 0; i < s.length; i++) {
        // keep track of paran status
        
        // if close paranthesis && fix count < 0 => increment fix count
        if (s[i] === ')' && status <= 0) {
            fixes++;
        } else if (s[i] === ')') {
            status--;
        } else {
            status++;
        }
        // else if close paran => -1
        // else => 1    
    }
    
    // if close
    return fixes + Math.abs(status);
};