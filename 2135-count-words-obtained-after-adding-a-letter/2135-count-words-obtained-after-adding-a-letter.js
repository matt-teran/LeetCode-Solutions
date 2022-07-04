/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    const startSet = new Set(startWords.map(word => [...word].sort().join('')));
    let result = 0;
    
    for (let word of targetWords) {
        word = [...word].sort().join('');
        for (let i = 0; i < word.length; i++) {
            if (!startSet.has(word.slice(0,i) + word.slice(i+1))) continue;
            result++;
            break;
        }
    }
    
    return result;
};