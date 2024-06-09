#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  void print(vector<int> v) {
    for (auto x : v) {
      cout << x << " ";
    }
    cout << endl;
  }
  int strStr(string haystack, string needle) {
    const int n = haystack.size(), m = needle.size();
    vector<int> lps(m, 0);
    int prevLPS = 0, i = 1, j = 0;

    while (i < m) {
      if (needle[i] == needle[prevLPS]) {
        lps[i] = prevLPS + 1;
        prevLPS = lps[i];
        i++;
        continue;
      }

      if (prevLPS == 0) {
        lps[i] = 0;
        i++;
        continue;
      }

      prevLPS = lps[prevLPS - 1];
    }

    print(lps);

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
