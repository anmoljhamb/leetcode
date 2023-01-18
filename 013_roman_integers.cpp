/**
 * * Question Link: https://leetcode.com/problems/roman-to-integer/
 * * Sample Input:  s = "MCMXCIV"
 * * Sample Output: Output: 1994
 */

class Solution
{
public:
    int romanToInt(string s)
    {
        unordered_map<char, int> roman;

        roman['I'] = 1;
        roman['V'] = 5;
        roman['X'] = 10;
        roman['L'] = 50;
        roman['C'] = 100;
        roman['D'] = 500;
        roman['M'] = 1000;

        int ans = 0;
        int n = s.length();
        for (int i = 0; i < n; i++)
        {
            if ((i == n - 1) || (roman[s[i]] > roman[s[i + 1]]))
            {
                ans += roman[s[i]];
            }
            else
            {
                ans += roman[s[i + 1]] - roman[s[i]];
                i += 1;
            }
        }
        return ans;
    }
};