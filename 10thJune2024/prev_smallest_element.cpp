#include <bits/stdc++.h>
#include <stack>
using namespace std;

vector<int> pse(vector<int> arr) {
  stack<int> s;
  vector<int> ans(arr.size());

  int i = 0;
  while (i < arr.size()) {
    if (s.empty()) {
      ans[i] = -1;
    } else {
      while (!s.empty() && s.top() > arr[i]) {
        s.pop();
      }
      if (s.empty()) {
        ans[i] = -1;
      } else {
        ans[i] = s.top();
      }
    }
    s.push(arr[i]);
    i++;
  }

  return ans;
}

int main() {
  vector<int> arr = {2, 5, 3, 6, 7, 4, 8, 1, 3};
  vector<int> ans = pse(arr);
  for (auto x : ans) {
    cout << x << " ";
  }
  cout << endl;
  return 0;
}
