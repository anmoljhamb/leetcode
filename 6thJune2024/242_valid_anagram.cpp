#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

int get_char_pos(char ch) { return (int)ch - (int)'a'; }

class Solution {
public:
  bool isAnagram(string s, string t) {
    if (s.length() != t.length())
      return false;
    unordered_map<int, int> map1, map2;
    for (char ch : s) {
      int temp = get_char_pos(ch);
      if (map1.find(temp) == map1.end()) {
        map1[temp] = 1;
      } else {
        map1[temp]++;
      }
    }
    for (char ch : t) {
      int temp = get_char_pos(ch);
      if (map2.find(temp) == map2.end()) {
        map2[temp] = 1;
      } else {
        map2[temp]++;
      }
    }

    for (int i = 0; i < 26; i++) {
      if (map1[i] != map2[i])
        return false;
    }
    return true;
  }
};
