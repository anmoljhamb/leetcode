#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  int maxArea(vector<int> &arr) {
    int ans = 0;
    int low = 0, high = arr.size() - 1, area;

    while (low < high) {
      area = min(arr[low], arr[high]) * (high - low);
      ans = max(area, ans);
      if (arr[low] < arr[high]) {
        low++;
      } else {
        high--;
      }
    }

    return ans;
  }
};
