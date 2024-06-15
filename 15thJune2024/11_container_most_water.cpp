#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  int maxArea(vector<int> &arr) {
    int max_area = 0;
    int low = 0, high = arr.size() - 1, temp;

    while (low < high) {
      temp = min(arr[high], arr[low]) * (high - low);
      max_area = max(max_area, temp);
      if (arr[low] < arr[high]) {
        low++;
      } else {
        high--;
      }
    }

    return max_area;
  }
};
