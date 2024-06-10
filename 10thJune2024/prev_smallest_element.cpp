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

vector<int> nse(vector<int> arr) {
  stack<int> s;
  vector<int> ans(arr.size());

  int i = arr.size() - 1;
  while (i > -1) {
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
  print(arr);
  vector<int> _pse = pse(arr);
  print(_pse);
  vector<int> _nse = nse(arr);
  print(_nse);
  return 0;
}
