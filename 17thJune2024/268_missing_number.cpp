#include <bits/stdc++.h>
#include <numeric>
using namespace std;

class Solution {
public:
  int missingNumber(vector<int> &nums) {
    int n = nums.size();
    int curr_sum = accumulate(nums.begin(), nums.end(), 0);
    return (n * (n + 1)) / 2 - curr_sum;
  }
};
