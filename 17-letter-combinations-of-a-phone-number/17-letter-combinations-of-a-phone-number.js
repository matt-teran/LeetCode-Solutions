/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
}

var letterCombinations = function(digits) {
    if (digits.length === 0) return [];
    const result = [];
    
    const backtrack = (i, combo) => {
        if (combo.length === digits.length) return result.push(combo);
        
        for (const c of map[digits[i]]) {
            backtrack(i + 1, combo + c);
        }
    };
    
    backtrack(0, '');
    
    return result;
};