#include <bits/stdc++.h>
#include <unordered_set>
using namespace std;

class Solution {
public:
  int longestConsecutive(vector<int> &nums) {
    unordered_set<int> s(nums.begin(), nums.end());

    int maxCount = 0;

    for (auto &x : nums) {
      // if, it's not the starting interval, skip;
      if (s.count(x - 1) == 1)
        continue;

      int curr = 1;
      while (s.count(x + curr) == 1) {
        curr++;
      }

      maxCount = max(maxCount, curr);
    }

    return maxCount;
  }
};
