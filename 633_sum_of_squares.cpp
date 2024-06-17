#include <bits/stdc++.h>
#include <cmath>
using namespace std;

class Solution {
  int is_perfect_square(int x) {
    int t = (int)sqrt(x);
    return t * t == x;
  }

public:
  bool judgeSquareSum(int c) {
    if (c == 0)
      return true;
    for (int i = 1; i <= (int)sqrt(c); i++) {
      int a = i * i;
      int b = c - a;
      if (is_perfect_square(b))
        return true;
    }
    return false;
  }
};
