#include <algorithm>
#include <bits/stdc++.h>
#include <cstring>
#include <string>
#include <unordered_map>
using namespace std;

int get_char_pos(char ch) { return (int)ch - (int)'a'; }

string make_key(string str) {
  unordered_map<int, int> hash;
  int temp;
  for (char ch : str) {
    temp = get_char_pos(ch);
    if (hash.count(temp) == 0) {
      hash[temp] = 1;
    } else {
      hash[temp]++;
    }
  }
  string ans = "";
  for (int i = 0; i < 26; i++) {
    ans += to_string(i) + "-" + to_string(hash[i]) + " ";
  }
  return ans;
}

class Solution {
public:
  vector<vector<string>> groupAnagrams(vector<string> &strs) {
    unordered_map<string, vector<string>> hash;
    string temp;
    for (string str : strs) {
      temp = make_key(str);
      if (hash.count(temp) == 0) {
        hash[temp] = {str};
      } else {
        hash[temp].push_back(str);
      }
    }

    vector<vector<string>> ans;
    for (auto _pair : hash) {
      ans.push_back(_pair.second);
    }
    return ans;
  }
};
