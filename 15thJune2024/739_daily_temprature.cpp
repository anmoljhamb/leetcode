#include <bits/stdc++.h>
#include <stack>
#include <utility>
using namespace std;

class Solution {
public:
  vector<int> dailyTemperatures(vector<int> &temperatures) {
    vector<int> ans(temperatures.size(), 0);
    stack<pair<int, int>> s;

    for (int i = temperatures.size() - 1; i >= 0; i--) {
      if (s.empty()) {
        ans[i] = 0;
      } else {
        while (!s.empty() && s.top().second < temperatures[i]) {
          s.pop();
        }
        if (s.empty()) {
          ans[i] = 0;
        } else {
          ans[i] = s.top().first - i;
        }
      }
      s.push({i, temperatures[i]});
    }

    return ans;
  }
};
