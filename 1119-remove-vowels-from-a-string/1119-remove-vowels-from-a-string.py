class Solution:
    def removeVowels(self, s: str) -> str:
        result = ''
        vowels = set('aeiou')
        for char in s:
            if char not in vowels:
                result = result + char
        return result
        