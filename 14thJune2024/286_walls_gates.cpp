#include <bits/stdc++.h>
#include <utility>
using namespace std;

class Solution {
  vector<vector<bool>> visited;
  int n, m;

public:
  void addRC(queue<pair<int, int>> &q, int i, int j, vector<vector<int>> grid) {
    if (i < 0 || i >= n)
      return;
    if (j < 0 || j >= m)
      return;
    if (visited[i][j])
      return;
    if (grid[i][j] == -1)
      return;
    q.push({i, j});
    visited[i][j] = true;
  }

  void islandsAndTreasure(vector<vector<int>> &grid) {
    queue<pair<int, int>> q;
    n = grid.size();
    m = grid[0].size();
    visited = vector<vector<bool>>(n, vector<bool>(m, false));

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (grid[i][j] == 0) {
          q.push({i, j});
          visited[i][j] = true;
        }
      }
    }

    int dist = 0;
    while (!q.empty()) {
      int k = q.size();
      while (k--) {
        auto curr = q.front();
        q.pop();
        grid[curr.first][curr.second] = dist;

        addRC(q, curr.first + 1, curr.second, grid);
        addRC(q, curr.first - 1, curr.second, grid);
        addRC(q, curr.first, curr.second + 1, grid);
        addRC(q, curr.first, curr.second - 1, grid);
      }
      dist++;
    }
  }
};
