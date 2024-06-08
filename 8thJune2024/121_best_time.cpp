#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  int maxProfit(vector<int> &prices) {
    int ans = 0;
    int left = 0, right = 1;
    while (right < prices.size()) {
      int profit = prices[right] - prices[left];
      if (profit > 0) {
        ans = max(profit, ans);
      } else {
        left = right;
      }
      right++;
    }
    return ans;
  }
};
