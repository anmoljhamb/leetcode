from typing import List


class Solution:
    def findFinalValue(
        self,
        nums: List[int],
        original: int,
    ) -> int:
        nums_set: set[int] = set()
        ans = original

        high = 0
        for num in nums:
            nums_set.add(num)
            high = max(num, high)

        while original <= high:
            if original in nums_set:
                original = 2 * original
            else:
                return original

        return original
