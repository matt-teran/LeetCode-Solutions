/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // const dp = Array(words.length);
    
    const set = new Set(words);
    const memo = {};
    
    const dp = word => {
        if (!(word in memo)) {
            let best = 1;
            for (let i = 0; i < word.length; i++) {
                const newWord = word.substring(0,i)+word.substring(i+1);
                if (!set.has(newWord)) continue;
                best = Math.max(best, 1 + dp(newWord));
            }
            memo[word] = best;
        }
        
        return memo[word];
    }
    
    return Math.max(...words.map(word => dp(word)));
};

// State variables: word
// 