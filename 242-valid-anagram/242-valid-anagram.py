class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        sCount = Counter()
        tCount = Counter()
        for i in range(len(s)):
            sCount[s[i]] += 1
            tCount[t[i]] += 1
        for c in sCount:
            if sCount[c] != tCount[c]:
                return False
        return True