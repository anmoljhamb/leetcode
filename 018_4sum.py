class Solution:
    def fourSum(self, arr: list[int], target: int) -> list[list[int]]:
        arr.sort()
        n = len(arr)
        ans = []
        for i in range(n):
            print(f"i: {i}")
            for j in range(i+1, n):
                print(f"j: {j}")
                for k in range(j+1, n):
                    print(f"k: {k}")
                    for l in range(k+1, n):
                        print(f"l: {l}")
                        temp = arr[i]+arr[j]+arr[k]+arr[l]
                        if (temp == target):
                            print("target found!")
                            ans.append([arr[i], arr[j], arr[k], arr[l]])
        return ans
