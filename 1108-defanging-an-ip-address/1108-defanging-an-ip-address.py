class Solution:
    def defangIPaddr(self, address: str) -> str:
        result = ''
        for char in address:
            if char == '.':
                result = result + '[.]'
            else:
                result += char
        
        return result