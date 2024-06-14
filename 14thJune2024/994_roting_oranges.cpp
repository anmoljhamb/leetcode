#include <bits/stdc++.h>
using namespace std;

class Solution {
  vector<vector<bool>> visited;
  int n, m;

  void addRC(queue<pair<int, int>> &q, int i, int j, vector<vector<int>> grid) {
    if (i < 0 || i >= n)
      return;
    if (j < 0 || j >= m)
      return;
    if (visited[i][j])
      return;
    if (grid[i][j] == 0)
      return;
    q.push({i, j});
    visited[i][j] = true;
  }

public:
  int orangesRotting(vector<vector<int>> &grid) {
    queue<pair<int, int>> q;
    n = grid.size();
    m = grid[0].size();
    visited = vector<vector<bool>>(n, vector<bool>(m, false));

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (grid[i][j] == 2) {
          q.push({i, j});
          visited[i][j] = true;
        }
      }
    }

    int time = -1;

    while (!q.empty()) {
      int k = q.size();
      while (k--) {
        auto curr = q.front();
        q.pop();
        int i = curr.first, j = curr.second;
        grid[i][j] = 2;

        addRC(q, i + 1, j, grid);
        addRC(q, i - 1, j, grid);
        addRC(q, i, j + 1, grid);
        addRC(q, i, j - 1, grid);
      }
      time++;
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (grid[i][j] == 1)
          return -1;
      }
    }

    if (time == -1)
      return 0;

    return time;
  }
};
