#include <algorithm>
#include <bits/stdc++.h>
#include <cmath>
using namespace std;

class Solution {
public:
  long findCost(vector<int> &arr, int k) {
    long cost = 0;
    for (auto &x : arr) {
      cost += ceil((double)x / k);
    }
    return cost;
  }

  int minEatingSpeed(vector<int> &arr, int h) {
    int low = 1;
    int max_el = *max_element(arr.begin(), arr.end());
    int high = max_el;
    int ans = max_el;

    while (low <= high) {
      int mid = (low + high) / 2;
      long curr_cost = findCost(arr, mid);
      // cout << "mid: " << mid << " curr_cost: " << curr_cost << endl;
      if (curr_cost <= h) {
        ans = min(ans, mid);
        high = mid - 1;
      } else if (curr_cost > h) {
        low = mid + 1;
      }
    }

    return ans;
  }
};
