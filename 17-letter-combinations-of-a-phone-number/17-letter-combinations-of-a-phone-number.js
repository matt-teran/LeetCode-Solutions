/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}

var letterCombinations = function(digits) {
    if (!digits.length) return [];
  // we have the option to press digits[i] map[digits[i]].length times
    const result = [];
    const combo = [];
    const dfs = (i) => {
        if (i === digits.length) return combo.length === digits.length && result.push([...combo].join(''));
        
        for (let j = i; j < digits.length; j++) {
            let n = 0;
            while (n < map[digits[j]].length) {
                combo.push(map[digits[i]][n]);
                dfs(j + 1);
                combo.pop();
                n++;
            }
        }
    }
    
    dfs(0);
    
    return result;
};