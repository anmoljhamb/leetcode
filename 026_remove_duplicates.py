class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        temp = []

        for (index, num) in enumerate(nums):
            if (num) not in temp:
                temp.append(num)

        for (index, num) in enumerate(temp):
            nums[index] = num

        return len(temp)
