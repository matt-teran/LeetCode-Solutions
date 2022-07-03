/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    const startSet = new Set(startWords.map(word => word.split('').sort().join('')));
    targetWords = targetWords.map(word => word.split('').sort().join(''));
    
    let result = 0;
    for (const word of targetWords) {
        
        for (let i = 0; i < word.length; i++) {
            let newWord = word.slice(0,i) + word.slice(i+1);
            if (startSet.has(newWord)) {
                result++;
                break;
            }
        }
    }
        
    return result;
};