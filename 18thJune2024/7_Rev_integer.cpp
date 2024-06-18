#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

class Solution {
public:
  int reverse(int x) {
    int res = 0;

    while (x) {
      if (res > INT32_MAX / 10 || res < INT32_MIN / 10)
        return 0;
      res = res * 10 + x % 10;
      x = x / 10;
    }

    return res;
  }
};
