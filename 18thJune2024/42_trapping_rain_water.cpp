#include <bits/stdc++.h>
using namespace std;

class Solution {
  void print(vector<int> arr) {
    for (auto x : arr) {
      cout << x << " ";
    }
    cout << endl;
  }

public:
  int trap(vector<int> &arr) {
    int ans = 0, temp;
    vector<int> left(arr.begin(), arr.end()), right(arr.begin(), arr.end());

    for (int i = 1; i < arr.size(); i++) {
      left[i] = max(left[i], left[i - 1]);
    }

    for (int i = arr.size() - 2; i >= 0; i--) {
      right[i] = max(right[i], right[i + 1]);
    }

    for (int i = 1; i < arr.size(); i++) {
      temp = min(left[i], right[i]) - arr[i];
      ans += max(temp, 0);
    }

    return ans;
  }
};
