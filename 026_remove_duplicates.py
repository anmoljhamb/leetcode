class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        temp = set(nums)
        for (index, num) in enumerate(temp):
            nums[index] = num
        return len(temp)
