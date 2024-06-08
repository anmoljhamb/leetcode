#include <algorithm>
#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

class Solution {
public:
  int findMin(vector<int> &arr) {
    int ans = INT32_MAX;
    int low = 0, high = arr.size() - 1;
    while (low <= high) {
      int mid = (low + high) / 2;
      if (arr[low] <= arr[mid] && arr[mid] <= arr[high]) {
        ans = min(ans, arr[low]);
        return ans;
      } else if (arr[mid] <= arr[high] && arr[high] <= arr[low]) {
        ans = min(ans, arr[mid]);
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return ans;
  }
};
