class Solution:

    def lengthOfLongestSubstring(self, s: str) -> int:
        if (len(set(list(s))) == len(s)):
            return len(s)
        max_len = 0
        for i in range(len(s)):
            curr_substr = set()
            for j in range(i, len(s)):
                prev_len = len(curr_substr)
                curr_substr.add(s[j])
                curr_len = len(curr_substr)

                if (curr_len == prev_len):
                    # Means that it has got a duplicate element, we can just break the loop
                    break
            max_len = max(len(curr_substr), max_len)
        return max_len
