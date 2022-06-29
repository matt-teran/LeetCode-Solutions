/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const map = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a/b < 0 ? Math.ceil(a/b) : Math.floor(a/b)
    }
    const stack = [];
    
    for (let token of tokens) {
        if (token in map) {
            let b = stack.pop();
            let a = stack.pop();
            stack.push(map[token](a,b));
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0];
};