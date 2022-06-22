/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// class Solution:
//     def wordBreak(self, s: str, wordDict: List[str]) -> bool:
//         dp = [False] * len(s)
//         for i in range(len(s)):
//             for word in wordDict:
//                 # Make sure to stay in bounds while checking criteria
//                 if i >= len(word) - 1 and (i == len(word) - 1 or dp[i - len(word)]):
//                     if s[i - len(word) + 1 : i + 1] == word:
//                         dp[i] = True
//                         break
        
//         return dp[-1]
var wordBreak = function(s, wordDict) {
    const dp = [];
    for (let i = 0; i < s.length; i++) dp.push(false);
    for (let i = 0; i < s.length; i++) {
        for (let word of wordDict) {
            if (i >= word.length - 1 && (i === word.length -1 || dp[i - word.length])) {
                if (s.slice(i - word.length + 1, i + 1) === word) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    return dp.at(-1);
};

// base case
// s = cs => true
// cs.len > s.len => false

// recurrence relation 
// dp(cs) = dp(cs + wordDict[i])

// function
// dp('');

// state variables
// • constructed string