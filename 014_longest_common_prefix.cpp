#include <bits/stdc++.h>
using namespace std;
/**
 * * Question Link: https://leetcode.com/problems/longest-common-prefix/
 * * Sample Input:  strs = ["flower","flow","flight"]
 * * Sample Output: Output: "fl"
 */

class Solution
{
public:
    string longestCommonPrefix(vector<string> &strs)
    {
        int shortest_length = INT32_MAX;

        for (auto string : strs)
        {
            shortest_length = min(shortest_length, (int)string.length());
        }

        string ans = "";
        for (int i = 0; i < shortest_length; i++)
        {
            char current = strs[0][i];
            for (int j = 1; j < strs.size(); j++)
            {
                if (strs[j][i] != current)
                {
                    return ans;
                }
            }
            ans += current;
        }
        return ans;
    }
};