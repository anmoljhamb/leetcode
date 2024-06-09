#include <bits/stdc++.h>
#include <functional>
#include <queue>
using namespace std;

class Solution {
public:
  int findKthLargest(vector<int> &nums, int k) {
    priority_queue<int, vector<int>, greater<int>> min_heap;

    for (int x : nums) {
      min_heap.push(x);
    }

    while (min_heap.size() > k) {
      min_heap.pop();
    }

    return min_heap.top();
  }
};
