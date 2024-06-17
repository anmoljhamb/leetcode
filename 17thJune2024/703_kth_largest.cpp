#include <algorithm>
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
    while (!pq.empty() && pq.size() != k) {
      pq.pop();
    }
  }

  int add(int val) {
    pq.push(val);
    if (pq.size() > k)
      pq.pop();
    return pq.top();
  }
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest* obj = new KthLargest(k, nums);
 * int param_1 = obj->add(val);
 */
