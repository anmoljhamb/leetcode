/**
 * * Question Link: https://leetcode.com/problems/palindrome-number/
 * * Sample Input:  x = 121
 * * Sample Output: true
 */

class Solution
{
public:
    bool isPalindrome(int x)
    {
        if (x < 0)
        {
            return false;
        }
        string number = "";
        while (x > 0)
        {
            number += (char)(x % 10);
            x /= 10;
        }
        int n = number.length();
        for (int i = 0; i < n / 2; i++)
        {
            if (number[i] != number[n - i - 1])
            {
                return false;
            }
        }
        return true;
    }
};