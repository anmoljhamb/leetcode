#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int lengthOfLongestSubstring(string str) {

    int left = 0, right = 0;
    unordered_set<char> s;
    int max_length = 0;

    while (right < str.size()) {
      if (s.count(str[right]) == 1) {
        while (left < right && s.count(str[right]) != 0) {
          s.erase(str[left]);
          left++;
        }
      }
      s.insert(str[right]);
      max_length = max(max_length, right - left + 1);
      right++;
    }

    return max_length;
  }
};
