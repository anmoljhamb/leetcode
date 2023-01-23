'''
Problem Link: https://leetcode.com/problems/longest-palindromic-substring/
'''


class Solution:

    def isPalindrome(self, s: str) -> bool:
        return s == s[::-1]

    def longestPalindrome(self, s: str) -> str:
        max_len = 0
        max_string = None
        for i in range(len(s)):
            curr_substr = ""
            for j in range(i, len(s)):
                curr_substr += s[j]
                if (self.isPalindrome(curr_substr) and len(curr_substr) > max_len):
                    max_len = len(curr_substr)
                    max_string = curr_substr
        return max_string
