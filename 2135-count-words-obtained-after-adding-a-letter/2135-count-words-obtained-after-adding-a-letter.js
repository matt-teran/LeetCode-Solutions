/**
 * @param {string[]} startWords
 * @param {string[]} targetWords
 * @return {number}
 */
var wordCount = function(startWords, targetWords) {
    const startSet = new Set();
    for (let word of startWords) startSet.add(word.split('').sort().join('')); // n 
    
    let result = 0;
    for (let word of targetWords) { // n
        word = word.split('').sort().join(''); 
        for (let i = 0; i < word.length; i++) {
            if (!startSet.has(word.slice(0,i) + word.slice(i+1))) continue;
            result++;
            break;
        }
    }

    return result;
};