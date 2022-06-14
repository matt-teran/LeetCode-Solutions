/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const res = [];
    const arr = text.split(' ');
    for (let i = 0; i < arr.length - 2; i++){
        if (arr[i] === first && arr[i + 1] === second) res[res.length] = arr[i + 2];
    }
    return res;
};