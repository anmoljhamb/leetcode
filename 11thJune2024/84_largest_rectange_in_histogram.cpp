#include <algorithm>
#include <bits/stdc++.h>
#include <stack>
using namespace std;

class Solution {
public:
  vector<int> previous_smallest_element(vector<int> arr) {
    vector<int> ans(arr.size());
    stack<pair<int, int>> s;

    int i = 0;
    while (i < arr.size()) {
      if (s.empty()) {
        ans[i] = -1;
      } else {
        while (!s.empty() && s.top().second >= arr[i]) {
          s.pop();
        }
        if (s.empty()) {
          ans[i] = -1;
        } else {
          ans[i] = s.top().first;
        }
      }
      s.push({i, arr[i]});
      i++;
    }

    return ans;
  }

  vector<int> next_smallest_element(vector<int> arr) {
    vector<int> ans(arr.size());
    stack<pair<int, int>> s;

    int i = arr.size() - 1;
    while (i >= 0) {
      if (s.empty()) {
        ans[i] = -1;
      } else {
        while (!s.empty() && s.top().second >= arr[i]) {
          s.pop();
        }
        if (s.empty()) {
          ans[i] = -1;
        } else {
          ans[i] = s.top().first;
        }
      }
      s.push({i, arr[i]});
      i--;
    }

    return ans;
  }

  void print(vector<int> arr) {
    for (auto x : arr) {
      cout << x << " ";
    }
    cout << endl;
  }

  int largestRectangleArea(vector<int> &arr) {
    auto pse = previous_smallest_element(arr);
    auto nse = next_smallest_element(arr);
    int ans = 0;
    // print(arr);
    // print(pse);
    // print(nse);
    for (int i = 0; i < arr.size(); i++) {
      int length;
      if (nse[i] == -1 && pse[i] == -1) {
        length = arr.size();
      } else if (nse[i] == -1) {
        length = i - pse[i];
        length += arr.size() - i - 1;
      } else if (pse[i] == -1) {
        length = nse[i] - i;
        length += i;
      } else {
        length = nse[i] - pse[i] - 1;
      }
      ans = max(ans, length * arr[i]);
    }
    return ans;
  }
};
