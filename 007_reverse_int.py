'''
Link: https://leetcode.com/problems/reverse-integer/
'''
import math


class Solution:
    def reverse(self, x: int) -> int:

        lower_limit = -math.pow(2, 31)
        upper_limit = math.pow(2, 31)-1

        number = str(x)
        if (x < 0):
            number = number[1:]

        number = number[::-1]
        number = int(number)

        if (lower_limit <= number <= upper_limit):

            if (x < 0):
                number *= -1

            return number

        return 0
