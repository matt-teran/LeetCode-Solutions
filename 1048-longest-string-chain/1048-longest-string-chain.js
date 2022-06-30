/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const wordsPresent = new Set(words);
    const memo = {};
    const dp = (word) => {
        if (!(word in memo)) {
            let maxLength = 1;
            for (let i = 0; i < word.length; i++) {
                const newWord = word.substring(0,i) + word.substring(i+1);
                if (wordsPresent.has(newWord)) {
                    let currentLength = 1 + dp(newWord);
                    maxLength = Math.max(maxLength, currentLength);
                }
                
            }
            memo[word] = maxLength;
        }
        
        return memo[word];
    }
    
    return Math.max(...words.map(word => dp(word)));
};