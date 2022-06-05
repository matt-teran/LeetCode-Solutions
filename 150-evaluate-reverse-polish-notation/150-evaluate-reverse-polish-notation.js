/**
 * @param {string[]} tokens
 * @return {number}
 */
// inputs: array of integers or operators
// output: num
// constraints: expression is always valid
// edge cases: na
var evalRPN = function(tokens) {
    // iterate through tokens
    // if integer => continue
    // if operator => `tokens[-2] operator tokens[-1]`
    let map = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b)
    }
    let stack = [];
    
    for (let token of tokens) {
        if (token in map) {
            let res = map[token](stack[stack.length - 2], stack[stack.length - 1]);
            stack.pop();
            stack.pop();
            stack.push(res);
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
};