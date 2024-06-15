#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

class Solution {
public:
  vector<int> topKFrequent(vector<int> &nums, int k) {
    unordered_map<int, int> mp;
    for (auto &x : nums) {
      mp[x]++;
    }

    unordered_map<int, vector<int>> hash;
    for (auto &x : mp) {
      hash[x.second].push_back(x.first);
    }

    vector<int> ans;

    for (int i = nums.size(); i >= 0 && k > 0; i--) {

      if (hash.count(i) == 0)
        continue;

      if (hash[i].size() <= k) {
        for (auto &x : hash[i]) {
          ans.push_back(x);
        }
        k -= hash[i].size();
      } else {
        for (int count = 0; count < k; count++) {
          ans.push_back(hash[i][count]);
        }
        k = 0;
      }
    }

    return ans;
  }
};
