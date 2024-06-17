#include <bits/stdc++.h>
#include <cmath>
#include <cstdint>
using namespace std;

class Solution {
public:
  uint32_t reverseBits(uint32_t n) {
    uint64_t ans = 0;
    for (int i = 0; i < 32; i++) {
      ans |= n & 1;
      n >>= 1;
      ans <<= 1;
    }
    ans = ans >> 1;
    return ans;
  }
};
