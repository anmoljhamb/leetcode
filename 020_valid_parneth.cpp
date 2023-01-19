#include <bits/stdc++.h>
using namespace std;

/**
 * * Question Link: https://leetcode.com/problems/valid-parentheses/
 * * Sample Input:  s = "()"
 * * Sample Output: true
 */

class Solution
{
public:
    bool isMatching(char b1, char b2)
    {
        if (b1 == '(' && b2 == ')')
        {
            return true;
        }
        if (b1 == '[' && b2 == ']')
        {
            return true;
        }
        if (b1 == '{' && b2 == '}')
        {
            return true;
        }
        return false;
    }

    bool isValid(string s)
    {
        stack<char> arr;
        for (char ch : s)
        {
            if (ch == ')' || ch == '}' || ch == ']')
            {
                if (arr.size() == 0)
                    return false;
                char current = arr.top();
                arr.pop();
                if (!isMatching(current, ch))
                {
                    return false;
                }
            }
            else
            {
                arr.push(ch);
            }
        }
        if (arr.size() != 0)
            return false;
        return true;
    }
};