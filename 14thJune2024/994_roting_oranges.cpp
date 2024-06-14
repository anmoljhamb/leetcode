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
    int fresh_oranges = 0;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (grid[i][j] == 1) {
          fresh_oranges++;
        }
        if (grid[i][j] == 2) {
          q.push({i, j});
          visited[i][j] = true;
        }
      }
    }

    int time = -1;

    if (fresh_oranges == 0)
      return 0;

    while (!q.empty()) {
      int k = q.size();
      while (k--) {
        auto curr = q.front();
        q.pop();
        int i = curr.first, j = curr.second;
        if (grid[i][j] == 1) {
          grid[i][j] = 2;
          fresh_oranges--;
        }

        addRC(q, i + 1, j, grid);
        addRC(q, i - 1, j, grid);
        addRC(q, i, j + 1, grid);
        addRC(q, i, j - 1, grid);
      }
      time++;
    }

    if (fresh_oranges > 0)
      return -1;

    return time;
  }
};
