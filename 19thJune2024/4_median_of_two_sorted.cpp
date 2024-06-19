#include <algorithm>
#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

class Solution {
  void print(vector<int> &arr) {
    for (auto &x : arr) {
      cout << x << " ";
    }
    cout << endl;
  }

public:
  double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2) {
    vector<int> a = nums1, b = nums2;
    if (nums2.size() < nums1.size()) {
      a = nums2;
      b = nums1;
    }
    int n = a.size(), m = b.size();
    int low = 0, high = n - 1;
    int total = n + m;
    int half = total / 2;

    while (true) {
      int i = (low + high) / 2;
      int j = (total + 1) / 2 - i;

      cout << low << " " << high << endl;
      cout << i << " " << j << endl;

      int a_left = i >= 0 ? a[i] : INT32_MIN;
      int a_right = i < n - 1 ? a[i + 1] : INT32_MAX;
      int b_left = j >= 0 ? b[j] : INT32_MIN;
      int b_right = j < m - 1 ? b[j + 1] : INT32_MAX;

      cout << a_left << " " << a_right << endl;
      cout << b_left << " " << b_right << endl;

      if (a_left <= b_right && b_left <= a_right) {
        if (total % 2 == 0) {
          return (max(a_left, b_left) + min(b_right, a_right)) / (double)2;
        }
        return min(b_right, a_right);
      } else if (a_left > b_right) {
        high = i - 1;
      } else {
        low = i + 1;
      }
    }

    return 0;
  }
};
