#include <bits/stdc++.h>
#include <cstdint>
#include <unordered_map>
#include <utility>
using namespace std;

class TimeMap {
  unordered_map<string, vector<pair<string, int>>> mp;

public:
  TimeMap() {}

  void set(string key, string value, int timestamp) {
    mp[key].push_back({value, timestamp});
  }

  string get(string key, int timestamp) {
    if (mp.count(key) == 0)
      return "";
    int low = 0;
    const auto &arr = mp[key];
    int high = arr.size() - 1;

    if (arr.size() == 0)
      return "";

    string ans;

    while (low <= high) {
      int mid = (low + high) / 2;

      if (arr[mid].second <= timestamp) {
        ans = arr[mid].first;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return ans;
  }
};
