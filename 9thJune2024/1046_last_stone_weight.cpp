#include <bits/stdc++.h>
#include <queue>
using namespace std;

class Solution {
public:
  int lastStoneWeight(vector<int> &stones) {
    priority_queue<int> heap;

    for (int x : stones) {
      heap.push(x);
    }

    while (heap.size() > 1) {
      int y = heap.top();
      heap.pop();
      int x = heap.top();
      heap.pop();
      if (y != x) {
        heap.push(y - x);
      }
    }

    if (heap.size() == 0)
      return 0;
    return heap.top();
  }
};
