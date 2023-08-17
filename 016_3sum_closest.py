import math


class Solution:
    def threeSumClosest(self, nums: list[int], target) -> list[list[int]]:
        ans = math.inf
        ans_temp = None
        nums.sort()
        print(nums)

        for i in range(len(nums)):
            l, r = i+1, len(nums)-1
            while l < r:
                temp = nums[i] + nums[l] + nums[r]
                if (abs(target-temp) < ans):
                    ans = abs(target-temp)
                    ans_temp = temp
                if temp > target:
                    r -= 1
                elif temp < target:
                    l += 1
                else:
                    return target

        return ans_temp
