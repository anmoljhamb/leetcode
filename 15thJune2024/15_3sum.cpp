#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  vector<vector<int>> threeSum(vector<int> &arr) {
    sort(arr.begin(), arr.end());

    vector<vector<int>> ans;

    for (int i = 0; i < arr.size(); i++) {
      if (i > 0 && arr[i] == arr[i - 1]) {
        continue;
      }

      int low = i + 1;
      int high = arr.size() - 1;
      int target = -arr[i];
      int temp;

      while (low < high) {
        temp = arr[low] + arr[high];
        if (temp == target) {
          ans.push_back({arr[i], arr[low], arr[high]});
          do {
            low++;
          } while (low < high && arr[low] == arr[low - 1]);
        } else if (temp < target) {
          low++;
        } else {
          high--;
        }
      }
    }

    return ans;
  }
};
