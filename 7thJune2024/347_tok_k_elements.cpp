#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

class Solution {
public:
  vector<int> topKFrequent(vector<int> &nums, int k) {
    unordered_map<int, int> mp;
    for (auto num : nums) {
      mp[num]++;
    }

    unordered_map<int, vector<int>> bucket;

    for (auto _pair : mp) {
      bucket[_pair.second].push_back(_pair.first);
    }

    vector<int> ans;

    for (int i = nums.size(); i >= 0 && k > 0; i--) {
      if (bucket[i].size() >= 1) {
        if (bucket[i].size() < k) {
          for (auto x : bucket[i]) {
            ans.push_back(x);
          }
          k -= bucket[i].size();
        } else {
          for (int j = 0; j < k; j++) {
            ans.push_back(bucket[i][j]);
          }
          k = 0;
        }
      }
    }

    return ans;
  }
};
