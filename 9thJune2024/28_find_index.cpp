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
    int prevLPS = 0, i = 1;

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
    return 0;
  }
};
