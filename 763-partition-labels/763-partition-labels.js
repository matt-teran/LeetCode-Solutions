/**
 * @param {string} s
 * @return {number[]}
 */

// Inputs: string
// output: array of partition lengths
// constraints: 1 <= s.length <= 500 | s is all lowercase letters
// edge cases: s length of 1
var partitionLabels = function(s) {
    if (s.length === 1) return [1];
    let result = [];
    let i = 0;
    
    // loop through string
    while (i < s.length) {
        
        // keep track of range
        let range;
        if (s.lastIndexOf(s[i]) !== -1) {
            range = s.lastIndexOf(s[i]);
            for (let j = i; j < range; j++) {
                // increase range if the current iteration exists further in the string    
                let newRange = s.lastIndexOf(s[j]);
                if (newRange > range) range = newRange;
            }
        } else {
            range = 1;
        }
        // loop until range is reached
        
        // push range to result
        result.push(range + 1 - i);
        // set i to range
        i = range + 1;
    }
    // return result
    return result;
};

//"ababcbacadefegdehijhklij"