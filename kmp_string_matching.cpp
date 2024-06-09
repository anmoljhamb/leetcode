#include <bits/stdc++.h>
using namespace std;

int match(string haystack, string needle) {
  const int n = haystack.size(), m = needle.size();
  int *lps = new int[m];
  lps[0] = 0;

  int i, j, prevLPS = 0;

  i = 1;
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

  cout << "lps: ";
  for (int i = 0; i < m; i++) {
    cout << lps[i] << " ";
  }
  cout << endl;

  i = 0, j = 0;
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
      return i - j;
    }
  }

  return -1;
}
