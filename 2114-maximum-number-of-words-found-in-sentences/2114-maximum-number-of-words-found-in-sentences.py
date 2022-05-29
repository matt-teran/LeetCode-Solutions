class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        def splitter(string):
            return len(string.split(' '))
        
        return max(map(splitter, sentences))