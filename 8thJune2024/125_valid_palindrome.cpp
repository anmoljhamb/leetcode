#include <algorithm>
#include <bits/stdc++.h>
#include <cctype>
using namespace std;

class Solution {
public:
  bool isPalindrome(string s) {
    int low = 0, high = s.size() - 1;

    transform(s.begin(), s.end(), s.begin(), ::tolower);

    while (low < high) {
      if (!isalnum(s[low])) {
        low++;
        continue;
      }
      if (!isalnum(s[high])) {
        high--;
        continue;
      }

      if (s[low] != s[high])
        return false;

      low++;
      high--;
    }

    return true;
  }
};
