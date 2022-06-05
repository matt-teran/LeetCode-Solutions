/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    const stack = []
    
    const backtrack = (openN, closeN) => {
        if (openN === closeN && n === openN) {
            result.push(stack.join(''));
            return;
        }
        if (openN < n) {
            stack.push('(');
            backtrack(openN + 1, closeN)
            stack.pop();
        }
        if (closeN < openN) {
            stack.push(')');
            backtrack(openN, closeN + 1);
            stack.pop();
        }
    }
    backtrack(0, 0);
    return result;
};