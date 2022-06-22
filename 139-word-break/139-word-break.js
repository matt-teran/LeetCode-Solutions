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
	const memo = [];
	for (let i = 0; i < s.length; i++) memo.push(-1);
	const dp = (i) => {
		if (i < 0) return true;
		if (memo[i] === -1)
		for (let word of wordDict) {
			if (i >= word.length - 1 && dp(i - word.length)) {
			if (s.slice(i - word.length + 1, i + 1) === word) {
					memo[i] = 1;
					break;
				}
			}
		}
		if (memo[i] === -1) memo[i] = 0;
		return memo[i] === 1;
	}
	return dp(s.length - 1);
}


// base case
// s = cs => true
// cs.len > s.len => false

// recurrence relation 
// dp(cs) = dp(cs + wordDict[i])

// function
// dp('');

// state variables
// • constructed string