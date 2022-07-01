/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const set = new Set(words);
    const memo = {};
    
    const dp = word => {
        if (!set.has(word)) return 0;
        
        if (!(word in memo)) {
            let best = 1;
            for (let i = 0; i < word.length; i++) {
                best = Math.max(best, 1 + dp(word.substring(0,i)+word.substring(i+1)));
            }
            memo[word] = best;
        }
        
        return memo[word];
    }
    
    return Math.max(...words.map(word => dp(word)));
};