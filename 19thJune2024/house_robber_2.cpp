#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

int solution(vector<int> &arr) {
  if (arr.size() <= 2)
    return *max_element(arr.begin(), arr.end());

  vector<int> dp(arr.size(), 0);
  dp[0] = arr[0];
  dp[1] = arr[1];

  for (int i = 1; i < arr.size(); i++) {
    int take = arr[i];
    if (i > 1) {
      take += dp[i - 2];
    }
    int not_take = dp[i - 1];
    dp[i] = max(take, not_take);
  }

  return dp[arr.size() - 1];
}

int main() {
  int n;
  cin >> n;
  vector<int> arr(n);

  for (auto &x : arr) {
    cin >> x;
  }

  if (arr.size() == 1) {
    cout << arr[0];
    return 0;
  }

  vector<int> left(arr.begin(), arr.end() - 1),
      right(arr.begin() + 1, arr.end());

  cout << max(solution(left), solution(right));

  return 0;
}
