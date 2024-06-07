#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

class Solution {
public:
  vector<int> twoSum(vector<int> &nums, int target) {
    vector<int> ans;
    unordered_map<int, vector<int>> hash;
    int temp;
    for (int i = 0; i < nums.size(); i++) {
      if (hash.count(nums[i]) == 0) {
        hash[nums[i]] = {i};
      } else {
        hash[nums[i]].push_back(i);
      }
    }
    for (int i = 0; i < nums.size(); i++) {
      temp = target - nums[i];
      if (temp == nums[i]) {
        if (hash[nums[i]].size() > 1) {
          ans = {hash[nums[i]][0], hash[nums[i]][1]};
          return ans;
        }
        continue;
      }
      if (hash.count(temp) == 1) {
        ans = {i, hash[temp][0]};
        return ans;
      }
    }
    return ans;
  }
};
