/**
 * @param {string} s
 * @return {boolean}
 */

// inputs: string of brackets
// output: bool
// constraints: string consists of only (){}[] | s length > 0
// edge cases: na
var isValid = function(s) {
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let openings = new Set(['[', '(', '{']);
    let stack = [];
    for (let p of s) {
        if (openings.has(p)) {
            stack.push(p)
        } else {
            if (stack[stack.length - 1] === map[p]) {
                stack.pop();
            } else {
                return false;
            }
        }
        
        
    }
    return !stack.length;
}