#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int longestConsecutive(vector<int> &nums) {
    unordered_set<int> s(nums.begin(), nums.end());
    int longest = 0, count;
    for (int x : s) {
      if (s.count(x - 1) == 1) {
        continue;
      }
      count = 1;
      while (s.count(x + count) == 1) {
        count++;
      }
      longest = max(count, longest);
    }
    return longest;
  }
};
