class Solution:
    def lengthOfLongestSubsequence(self, arr: List[int], target: int) -> int:
        n = len(arr)
	
        subset = [[False for x in range(n + 1)]
                        for y in range (target + 1)]
        length = [[0 for x in range (n + 1)]
                    for y in range (target + 1)]

        for i in range (n + 1):
            subset[0][i] = True
            length[0][i] = 0
        
        for i in range (1, target + 1):
            subset[i][0] = False
            length[i][0] = -1
            
        for i in range (1, target + 1): 
            for j in range (1, n + 1):
                subset[i][j] = subset[i][j - 1]
                length[i][j] = length[i][j - 1]
                if (i >= arr[j - 1]) :
                    subset[i][j] = (subset[i][j] or
                                    subset[i - arr[j - 1]][j - 1])

                    if (subset[i][j]):
                        length[i][j] = (max(length[i][j - 1], 
                                        length[i - arr[j - 1]][j - 1] + 1))
        return length[target][n]

