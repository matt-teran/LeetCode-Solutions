/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let a = s.split('');
    const stack = [];
    for (let i = 0; i < a.length; i++) if (a[i] === '[') stack.push(i);
    
    while (stack.length) {
        const i = stack.pop();
        let start = i - 1;
        let end = a.indexOf(']', i);
        while (a[start-1] < 10) start--;
        let result = a.slice(i+1, end).join('').repeat(Number(a.slice(start, i).join('')));
        a.splice(start, end - start + 1, result);
    }
    return a.join('');
};