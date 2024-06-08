#include <bits/stdc++.h>
using namespace std;

bool is_opening(char ch) { return ch == '(' || ch == '{' || ch == '['; }
bool is_matching(char p1, char p2) {
  return (p1 == '(' && p2 == ')') || (p1 == '[' && p2 == ']') ||
         (p1 == '{' && p2 == '}');
}

class Solution {
public:
  bool isValid(string str) {
    stack<char> s;
    for (char ch : str) {
      if (is_opening(ch)) {
        s.push(ch);
        continue;
      }
      if (s.empty())
        return false;
      if (!is_matching(s.top(), ch)) {
        return false;
      }
      s.pop();
    }
    return s.empty();
  }
};
