#include <bits/stdc++.h>
#include <queue>
using namespace std;

class KthLargest {
  int capacity;
  priority_queue<int, vector<int>, greater<int>> min_heap;

public:
  KthLargest(int k, vector<int> &nums) {
    capacity = k;
    for (int x : nums) {
      min_heap.push(x);
    }

    while (min_heap.size() > k) {
      min_heap.pop();
    }
  }

  int add(int val) {

    if (min_heap.size() >= capacity) {
      int kth_largest = min_heap.top();
      if (val < kth_largest)
        return kth_largest;
      min_heap.pop();
    }

    min_heap.push(val);
    return min_heap.top();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
