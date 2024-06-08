#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int lengthOfLongestSubstring(string str) {
    if (str.size() == 0)
      return 0;
    int ans = 0;
    int left = 0;
    unordered_set<char> s;
    s.insert(str[left]);
    ans = max(ans, (int)s.size());

    int right = 1;
    while (right < str.size()) {
      if (s.count(str[right]) == 1) {
        while (left <= right && s.count(str[right]) == 1) {
          s.erase(str[left]);
          left++;
        }
      }
      s.insert(str[right]);
      ans = max(ans, (int)s.size());
      right++;
    }

    return ans;
  }
};
