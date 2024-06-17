#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  int strStr(string haystack, string needle) {
    int n = haystack.size();
    int m = needle.size();
    vector<int> lps = vector<int>(m);

    int prev_lps = 0, i = 1, j = 0;

    while (i < m) {
      if (needle[i] == needle[prev_lps]) {
        lps[i] = prev_lps + 1;
        prev_lps = lps[i];
        i++;
        continue;
      }

      if (prev_lps == 0) {
        lps[i] = 0;
        i++;
        continue;
      }

      prev_lps = lps[prev_lps - 1];
    }

    i = 0;
    j = 0;

    while (i < n) {
      if (haystack[i] == needle[j]) {
        i++;
        j++;
      } else {
        if (j == 0) {
          i++;
        } else {
          j = lps[j - 1];
        }
      }

      if (j == m) {
        return i - m;
      }
    }
    return -1;
  }
};
