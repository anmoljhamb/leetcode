#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  int rob(vector<int> &arr) {
    if (arr.size() <= 2)
      return *max_element(arr.begin(), arr.end());

    vector<int> dp(arr.size(), 0);
    dp[0] = arr[0];
    dp[1] = arr[1];

    for (int i = 1; i < arr.size(); i++) {
      int take = arr[i];
      if (i > 1) {
        take += dp[i - 2];
      }
      int not_take = dp[i - 1];
      dp[i] = max(take, not_take);
    }

    return max(dp[arr.size() - 1], dp[arr.size() - 2]);
  }
};
