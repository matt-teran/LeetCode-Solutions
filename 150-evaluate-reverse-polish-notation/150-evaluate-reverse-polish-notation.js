/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const map = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b > 0 ? Math.floor(a/b) : Math.ceil(a/b)
    }
    const stack = [];
    
    for (const token of tokens) {
        if (token in map) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(map[token](a,b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};