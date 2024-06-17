#include <bits/stdc++.h>
#include <queue>
using namespace std;

class KthLargest {
  int k;
  priority_queue<int, vector<int>, greater<int>> pq;

public:
  KthLargest(int k, vector<int> &nums) {
    this->k = k;
    pq = priority_queue<int, vector<int>, greater<int>>(nums.begin(),
                                                        nums.end());
    while (pq.size() > k) {
      pq.pop();
    }
  }

  int add(int val) {
    if (pq.size() >= k) {
      int top = pq.top();
      if (val < top) {
        return top;
      }
      pq.pop();
    }
    pq.push(val);
    return pq.top();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
