#include <algorithm>
#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

int max_val(unordered_map<int, int> &hash) {
  int ans = 0;

  for (auto &x : hash) {
    ans = max(ans, x.second);
  }

  return ans;
}

int sol(vector<int> &arr, unordered_map<int, int> hash) {
  int beauty = max_val(hash);
  unordered_map<int, int> mp;

  int l = 0, r = 0;
  int ans = arr.size();

  while (r < arr.size()) {
    mp[arr[r]]++;
    // cout << r << " max_val: " << max_val(mp) << endl;
    // cout << "ans: " << ans << endl;
    while (max_val(mp) >= beauty) {
      ans = min(ans, r - l + 1);
      mp[arr[l]]--;
      l++;
    }
    r++;
  }

  return ans;
}

int main() {

  int n;
  cin >> n;

  vector<int> arr(n);
  unordered_map<int, int> mp;

  for (auto &x : arr) {
    cin >> x;
    mp[x]++;
  }

  cout << sol(arr, mp);

  return 0;
}
