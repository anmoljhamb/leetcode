#include <bits/stdc++.h>
using namespace std;

class Solution {
  int n, m;
  vector<vector<bool>> visited;

  void addRC(queue<pair<int, int>> &q, int i, int j, vector<vector<int>> &grid,
             int prev) {
    if (i < 0 || i >= n)
      return;
    if (j < 0 || j >= m)
      return;
    if (visited[i][j])
      return;
    if (grid[i][j] < prev)
      return;

    q.push({i, j});
    visited[i][j] = true;
  }

public:
  vector<vector<int>> pacificAtlantic(vector<vector<int>> &grid) {
    queue<pair<int, int>> q;
    n = grid.size();
    m = grid[0].size();
    visited = vector<vector<bool>>(n, vector<bool>(m, false));
    vector<vector<bool>> p, a;
    p = vector<vector<bool>>(n, vector<bool>(m, false));
    a = vector<vector<bool>>(n, vector<bool>(m, false));

    for (int i = 0; i < n; i++) {
      q.push({i, 0});
      visited[i][0] = true;
    }

    for (int j = 0; j < m; j++) {
      q.push({0, j});
      visited[0][j] = true;
    }

    while (!q.empty()) {
      int k = q.size();
      while (k--) {
        auto curr = q.front();
        int i = curr.first, j = curr.second;
        q.pop();
        p[i][j] = true;
        addRC(q, i + 1, j, grid, grid[i][j]);
        addRC(q, i - 1, j, grid, grid[i][j]);
        addRC(q, i, j + 1, grid, grid[i][j]);
        addRC(q, i, j - 1, grid, grid[i][j]);
      }
    }

    visited = vector<vector<bool>>(n, vector<bool>(m, false));

    for (int i = 0; i < n; i++) {
      q.push({i, m - 1});
      visited[i][m - 1] = true;
    }

    for (int j = 0; j < m; j++) {
      q.push({n - 1, j});
      visited[n - 1][j] = true;
    }

    while (!q.empty()) {
      int k = q.size();
      while (k--) {
        auto curr = q.front();
        int i = curr.first, j = curr.second;
        q.pop();
        a[i][j] = true;
        addRC(q, i + 1, j, grid, grid[i][j]);
        addRC(q, i - 1, j, grid, grid[i][j]);
        addRC(q, i, j + 1, grid, grid[i][j]);
        addRC(q, i, j - 1, grid, grid[i][j]);
      }
    }

    vector<vector<int>> ans;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (p[i][j] && a[i][j]) {
          ans.push_back({i, j});
        }
      }
    }

    return ans;
  }
};
