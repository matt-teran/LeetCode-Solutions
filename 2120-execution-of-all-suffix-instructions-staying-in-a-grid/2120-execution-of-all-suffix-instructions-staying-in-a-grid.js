/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
    const result = [];
    // • loop through instructions
    for (let i = 0; i < s.length; i++) {
        // • for each itn. => perform instructions
        let pos = [...startPos];
        let count = 0;
        for (let j = i; j < s.length; j++) {
            if (pos[0] === n || pos[1] === n) {
                // count--;
                break;
            } else if (pos[0] === -1 || pos[1] < 0) {
                // count--;
                break;
            } else if (s[j] === 'R') {
                pos[1]++;
            } else if (s[j] === 'L') {
                pos[1]--;
            } else if (s[j] === 'D') {
                pos[0]++;
            } else if (s[j] === 'U') {
                pos[0]--;
            }
            count++;
        }
        if (pos[0] === n || pos[1] === n || pos[0] < 0 || pos[1] < 0) count--;
        result.push(count);
        //  - if R, x += 1
        //  - if L, x -= 1
        //  - if D, y += 1
        //  - if U, y -= 1
        //  - if x or y exceeds m => invalid
        // • keep count of valid moves
        // • at invalid move, push count to result array
        // • return result array    
    }
    return result;
};