#include <bits/stdc++.h>
#include <stack>
#include <string>
using namespace std;

class Solution {
  bool is_token(string ch) {
    if (ch == "*")
      return true;
    if (ch == "/")
      return true;
    if (ch == "+")
      return true;
    if (ch == "-")
      return true;
    return false;
  }

  int eval(int x, int y, string op) {
    if (op == "+")
      return x + y;
    if (op == "-")
      return x - y;
    if (op == "*")
      return x * y;
    if (op == "/")
      return x / y;
    return 0;
  }

public:
  int evalRPN(vector<string> &tokens) {
    stack<int> s;
    int left, right;

    for (string &x : tokens) {
      if (is_token(x)) {
        right = s.top();
        s.pop();
        left = s.top();
        s.pop();
        int temp = eval(left, right, x);
        s.push(temp);
      } else {
        s.push(stoi(x));
      }
    }

    return s.top();
  }
};
