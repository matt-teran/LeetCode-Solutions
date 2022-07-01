/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    const map = {};
    words.sort((a,b) => a.length - b.length);
    for (let i = 0; i < words.length; i++) map[words[i]] = i;
    console.log(map);
    const dp = Array(words.length).fill(1);
    
    for (let i = 0; i < words.length; i++) {
        let best = 1;
        for (let j = 0; j < words[i].length; j++) {
            const newWord = words[i].substring(0,j) + words[i].substring(j+1);
            if (i === 2) console.log(newWord);
            if (!(newWord in map)) continue;
            best = Math.max(best, 1 + dp[map[newWord]]);
        }
        dp[i] = best;
    }
    return Math.max(...dp);
    
    
//     const set = new Set(words);
//     const memo = {};
    
//     const dp = word => {
//         if (!(word in memo)) {
//             let best = 1;
//             for (let i = 0; i < word.length; i++) {
//                 const newWord = word.substring(0,i)+word.substring(i+1);
//                 if (!set.has(newWord)) continue;
//                 best = Math.max(best, 1 + dp(newWord));
//             }
//             memo[word] = best;
//         }
        
//         return memo[word];
//     }
    
//     return Math.max(...words.map(word => dp(word)));
};

// State variables: word
// 