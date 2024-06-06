#include <bits/stdc++.h>
#include <set>
using namespace std;

class Solution {
public:
  bool containsDuplicate(vector<int> &nums) {
    // This algorithm is O(nlogn) since, the count function is O(logn)
    set<int> my_set;
    for (auto num : nums) {
      if (my_set.count(num) == 1) {
        return true;
      }
      my_set.insert(num);
    }
    return false;
  }
};
