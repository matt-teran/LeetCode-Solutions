/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    words.sort((a,b) => a.length - b.length);
    
    const wordsPresent = new Set(words);
    const memo = {};
    const dfs = (word) => {
        if (!(word in memo)) {
            let maxLength = 1;
            for (let i = 0; i < word.length; i++) {
                const newWord = word.substring(0,i) + word.substring(i+1);
                if (wordsPresent.has(newWord)) {
                    let currentLength = 1 + dfs(newWord);
                    maxLength = Math.max(maxLength, currentLength);
                }
                
            }
            memo[word] = maxLength;
        }
        
        return memo[word];
    }
    let result = 1;
    for (const word of words) {
        result = Math.max(dfs(word), result);
    }
    
    return result;
};

var validate = (a,b) => {
    if (a.length + 1 !== b.length) return false;
    let from = 0;
    for (const char of a) {
        if (b.indexOf(char, from) === -1) return false;
        from = b.indexOf(char,from) + 1;
    }
    return true;
}