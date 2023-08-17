class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        ans = []
        nums.sort()

        for i in range(len(nums)):
            if (i > 0 and nums[i] == nums[i-1]):
                continue

            l, r = i+1, len(nums)-1
            print(l, r)
            while l < r:
                temp = nums[i] + nums[l] + nums[r]
                if temp > 0:
                    r -= 1
                elif temp < 0:
                    l += 1
                else:
                    print("Here!")
                    ans.append([nums[i], nums[l], nums[r]])
                    l += 1
                    while (nums[l] == nums[l-1] and l < r):
                        l += 1

        return ans
