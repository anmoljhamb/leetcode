#include <algorithm>
#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

class MinStack {
  stack<int> s;
  int min_el = INT32_MAX;

public:
  MinStack() {}

  void push(int val) {
    s.push(val);
    min_el = min(min_el, val);
  }

  void pop() {
    if (s.top() != min_el) {
      s.pop();
      return;
    }
    s.pop();
    stack<int> temp = s;
    int temp_mini = INT32_MAX;
    while (!temp.empty()) {
      temp_mini = min(temp.top(), temp_mini);
      temp.pop();
    }
    min_el = temp_mini;
  }

  int top() { return s.top(); }

  int getMin() { return min_el; }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
