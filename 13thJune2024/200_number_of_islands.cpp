#include <bits/stdc++.h>
using namespace std;

typedef unordered_set<int> us;

class Solution {
  int n, m;
  int pos(int i, int j) { return i * n + j; }
  int ans = 0;
  vector<bool> visited;

  void print_list(vector<unordered_set<int>> list) {
    for (int i = 0; i < list.size(); i++) {
      cout << i << ": ";
      for (auto x : list[i]) {
        cout << x << " ";
      }
      cout << endl;
    }
  }

  void dfs(vector<us> list, int i) {
    if (visited[i])
      return;

    visited[i] = true;

    for (int j : list[i]) {
      if (!visited[j]) {
        dfs(list, j);
        visited[j] = true;
      }
    }
  }

public:
  int numIslands(vector<vector<char>> &grid) {
    ans = 0;
    m = grid.size();
    n = grid[0].size();
    visited = vector<bool>(m * n, false);
    vector<unordered_set<int>> list(m * n, unordered_set<int>());

    for (int i = 0; i < m; i++) {
      for (int j = 0; j < n; j++) {
        int k = 1;
        while (i + k < m && grid[i + k][j] != '0') {
          list[pos(i, j)].insert(pos(i + k, j));
          list[pos(i + k, j)].insert(pos(i, j));
          k++;
        }

        k = 0;
        while (j + k < n && grid[i][j + k] != '0') {
          list[pos(i, j)].insert(pos(i, j + k));
          list[pos(i, j + k)].insert(pos(i, j));
          k++;
        }
      }
    }

    for (int i = 0; i < m * n; i++) {
      if (!visited[i] && list[i].size() > 0) {
        dfs(list, i);
        ans++;
      }
    }

    return ans;
  }
};
