class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t): 
            return False
        sCount = Counter()
        tCount = Counter()
        for char in s:
            sCount[char] += 1
        for char in t:
            tCount[char] += 1
        for char in s:
            if sCount[char] != tCount[char]:
                return False
        return True