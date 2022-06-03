/**
 * @param {string} s
 * @return {number}
 */

// inputs: string of chars (any)
// output: integer (length of longest substring w/o dups)
// constraints: na
// edge cases: string length is 0
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    
    // set two pointers, i @ 0, j @ 1
    let i = 0;
    let j = 0;
    for (j; j <= s.length; j++) {
        //check if current range has duplicates, advance window
        if ([...new Set(s.substring(i, j))].length !== j - i) {
            i++;
        }
        //else expand 
    }
    if ([...new Set(s.substring(i, j))].length !== j - i) {
            j--;
        }
    return j - i;
};