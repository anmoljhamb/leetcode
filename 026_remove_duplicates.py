class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        replace = 1

        for i in range(1, len(nums)):
            if (nums[i] != nums[i-1]):
                nums[replace] = nums[i]
                replace += 1

        return replace
