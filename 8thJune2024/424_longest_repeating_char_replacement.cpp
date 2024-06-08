#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

int pos(char ch) { return (int)ch - (int)'A'; }

class Solution {
public:
  int characterReplacement(string s, int k) {
    int hash[26] = {0};
    int maxLength = 0, max_freq = 0;
    int left = 0, right = 0;
    for (right = 0; right < s.size(); right++) {
      hash[pos(s[right])]++;
      max_freq = *max_element(hash, hash + 26);
      while (right - left + 1 - max_freq > k) {
        hash[pos(s[left])]--;
        left++;
      }
      maxLength = max(maxLength, right - left + 1);
    }
    return maxLength;
  }
};
