#include <bits/stdc++.h>
using namespace std;

class Solution {
  int n;

public:
  void util(int open, int close, vector<string> &ans, string s) {
    if (open == close && close == n) {
      ans.push_back(s);
      return;
    }

    if (open < n) {
      s += "(";
      util(open + 1, close, ans, s);
      s.pop_back();
    }

    if (close < open) {
      s += ")";
      util(open, close + 1, ans, s);
      s.pop_back();
    }
  }

  vector<string> generateParenthesis(int n) {
    this->n = n;
    vector<string> ans;
    string s = "";
    util(0, 0, ans, s);
    return ans;
  }
};
