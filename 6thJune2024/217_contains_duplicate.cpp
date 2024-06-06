#include <bits/stdc++.h>
#include <set>
#include <unordered_map>
using namespace std;

// class Solution {
// public:
//   bool containsDuplicate(vector<int> &nums) {
//     // This algorithm is O(nlogn) since, the count function is O(logn)
//     set<int> my_set;
//     for (auto num : nums) {
//       if (my_set.count(num) == 1) {
//         return true;
//       }
//       my_set.insert(num);
//     }
//     return false;
//   }
// };

class Solution {
public:
  bool containsDuplicate(vector<int> &nums) {
    unordered_map<int, int> _map;
    for (const auto num : nums) {
      if (_map.find(num) != _map.end()) {
        return true;
      }
      _map[num] = 1;
    }

    return false;
  }
};
