class Solution:

    def get_pos(self, char: str):
        return ord(char) - ord('a')

    def hash_string(self, s: str):
        arr = [0] * 26
        for char in s:
            arr[self.get_pos(char)] += 1
        return arr

    def checkInclusion(self, s1: str, s2: str) -> bool:
        hash1 = self.hash_string(s1)
        low = 0
        high = 0
        hash2 = [0] * 26
        for high in range(len(s2)):
            hash2[self.get_pos(s2[high])] += 1

            while (low < high and hash2[self.get_pos(s2[low])] > hash1[self.get_pos(s2[low])]):
                hash2[ord(s2[low]) - ord('a')] -= 1
                low += 1

            if (hash1 == hash2):
                return True
        return False
