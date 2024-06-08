#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  vector<int> dailyTemperatures(vector<int> &temperatures) {
    // there needs to be a monotonic decreasing stack.
    stack<pair<int, int>>
        s; // first value is the index, and second value is the value
    vector<int> ans(temperatures.size(), 0);
    for (int i = temperatures.size() - 1; i >= 0; i--) {
      int curr = temperatures[i];
      while (!s.empty() && curr >= s.top().second) {
        s.pop();
      }
      if (s.empty()) {
        ans[i] = 0;
      } else {
        ans[i] = s.top().first - i;
      }
      s.push({i, temperatures[i]});
    }
    return ans;
  }
};
