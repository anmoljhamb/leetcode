#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
  int pos(char ch) { return (int)ch - (int)'A'; }

public:
  int characterReplacement(string s, int k) {
    int left = 0, right = 0, ans = 0, max_el;
    vector<int> hash(26, 0);

    for (right = 0; right < s.size(); right++) {
      hash[pos(s[right])]++;
      max_el = *max_element(hash.begin(), hash.end());
      while (left <= right && (right - left + 1 - max_el) > k) {
        hash[pos(s[left])]--;
        left++;
      }
      ans = max(ans, right - left + 1);
    }

    return ans;
  }
};
