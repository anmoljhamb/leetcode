#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  vector<int> productExceptSelf(vector<int> &nums) {
    vector<int> left = nums, right = nums, ans = nums;
    for (int i = 1; i < left.size(); i++) {
      left[i] *= left[i - 1];
    }
    for (int i = right.size() - 2; i >= 0; i--) {
      right[i] *= right[i + 1];
    }

    for (int i = 0; i < ans.size(); i++) {
      int _left = i == 0 ? 1 : left[i - 1];
      int _right = i == ans.size() - 1 ? 1 : right[i + 1];
      ans[i] = _left * _right;
    }

    return ans;
  }
};
