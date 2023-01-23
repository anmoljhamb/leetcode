'''
Problem Link: https://leetcode.com/problems/longest-palindromic-substring/
'''


class Solution:

    def is_palindrome(self, s: str) -> bool:
        return s == s[::-1]

    def longestPalindrome(self, s: str) -> str:

        if (self.is_palindrome(s)):
            return s

        # Loop through the entire stirng.
        # find the next occurnces. Check if they are a palindrome.

        n = len(s)
        max_sub = ""
        for i in range(n):

            current_char = s[i]
            next_occurnces = [j for j in range(
                i+1, n) if s[j] == current_char]

            for j in next_occurnces:
                curr_substr = s[i: j+1]
                if (self.is_palindrome(curr_substr)):
                    if (len(curr_substr) > len(max_sub)):
                        max_sub = curr_substr

        if len(max_sub) == 0:
            return s[0]

        return max_sub
