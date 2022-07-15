class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = []
        groups = defaultdict(list)
        for s in strs:
            groups[''.join(sorted(s))].append(s)
        for g in groups:
            res.append(groups[g])
        return res