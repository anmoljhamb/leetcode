#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class MinStack {
  stack<int> s;
  stack<int> min_stack;

public:
  MinStack() {}

  void push(int val) {
    s.push(val);
    if (min_stack.size() == 0) {
      min_stack.push(val);
      return;
    }
    min_stack.push(min(val, min_stack.top()));
  }

  void pop() {
    int temp = s.top();
    s.pop();
    min_stack.pop();
  }

  int top() { return s.top(); }

  int getMin() { return min_stack.top(); }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(val);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */
