from heapq import heappush, heappop
from bisect import bisect, insort


class Solution:
    def getNumOfInversions(self, A):
        N = len(A)
        if N <= 1:
            return 0
        sortList = []
        result = 0
        for i, v in enumerate(A):
            heappush(sortList, (v, i))
        x = []
        while sortList:
            v, i = heappop(sortList)
            y = bisect(x, i)
            result += i - y
            insort(x, i)
        return result

    def minimumSteps(self, s: str) -> int:
        temp = list(map(int, list(s)))
        return self.getNumOfInversions(temp)
        