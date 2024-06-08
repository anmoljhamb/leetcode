#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

class Solution {
public:
  vector<vector<int>> threeSum(vector<int> &nums) {
    vector<vector<int>> ans;
    int temp;

    sort(nums.begin(), nums.end());

    for (int i = 0; i < nums.size(); i++) {
      if (i > 0 && nums[i] == nums[i - 1])
        continue;
      int low = i + 1;
      int high = nums.size() - 1;
      while (low < high) {
        temp = nums[i] + nums[low] + nums[high];
        if (temp == 0) {
          ans.push_back({nums[i], nums[low], nums[high]});
          do {
            low++;
          } while (nums[low] == nums[low - 1] && low < high);
        } else {
          if (temp < 0) {
            low++;
          } else {
            high--;
          }
        }
      }
    }
    return ans;
  }
};
