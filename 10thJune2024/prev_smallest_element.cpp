#include <bits/stdc++.h>
#include <stack>
using namespace std;

vector<int> pse(vector<int> arr) {
  stack<pair<int, int>> s;
  vector<int> ans(arr.size());

  int i = 0;
  while (i < arr.size()) {
    if (s.empty()) {
      ans[i] = -1;
    } else {
      while (!s.empty() && s.top().second > arr[i]) {
        s.pop();
      }
      if (s.empty()) {
        ans[i] = -1;
      } else {
        ans[i] = s.top().first;
      }
    }
    s.push({i, arr[i]});
    i++;
  }

  return ans;
}

vector<int> nse(vector<int> arr) {
  stack<pair<int, int>> s;
  vector<int> ans(arr.size());

  int i = arr.size() - 1;
  while (i > -1) {
    if (s.empty()) {
      ans[i] = -1;
    } else {
      while (!s.empty() && s.top().second > arr[i]) {
        s.pop();
      }
      if (s.empty()) {
        ans[i] = -1;
      } else {
        ans[i] = s.top().first;
      }
    }
    s.push({i, arr[i]});
    i--;
  }

  return ans;
}

void print(vector<int> arr) {
  for (auto x : arr) {
    cout << x << " ";
  }
  cout << endl;
}

int main() {
  vector<int> arr = {2, 5, 3, 6, 7, 4, 8, 1, 3};
  vector<int> _pse = pse(arr);
  vector<int> _nse = nse(arr);
  vector<int> ans(arr.size());
  int result = 0;
  for (int i = 0; i < arr.size(); i++) {
    int length;
    if (_pse[i] == -1 && _nse[i] == -1) {
      length = 1;
    } else if (_pse[i] == -1) {
      length = _nse[i] - i;
    } else if (_nse[i] == -1) {
      length = i - _pse[i];
    } else {
      length = _nse[i] - _pse[i] - 1;
    }
    result = max(result, arr[i] * length);
  }
  cout << result << endl;
  return 0;
}
