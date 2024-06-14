#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

class Solution {
  vector<vector<int>> visited;
  int n, m;

public:
  int bfs(vector<vector<int>> grid, int i, int j) {
    queue<pair<int, int>> q;
    int ans = 0;
    q.push({i, j});

    while (!q.empty()) {
      queue<pair<int, int>> temp;
      while (!q.empty()) {
        auto curr = q.front();
        q.pop();

        if (visited[curr.first][curr.second])
          continue;

        if (grid[curr.first][curr.second] == 0)
          continue;

        if (curr.first + 1 < n && grid[curr.first + 1][curr.second] != 0) {
          temp.push({curr.first + 1, curr.second});
        }

        if (curr.second + 1 < m && grid[curr.first][curr.second + 1] != 0) {
          temp.push({curr.first, curr.second + 1});
        }

        if (curr.first - 1 >= 0 && grid[curr.first - 1][curr.second] != 0) {
          temp.push({curr.first - 1, curr.second});
        }

        if (curr.second - 1 >= 0 && grid[curr.first][curr.second - 1] != 0) {
          temp.push({curr.first, curr.second - 1});
        }

        ans++;
        visited[curr.first][curr.second] = true;
      }
      q = temp;
    }

    return ans;
  }

  int maxAreaOfIsland(vector<vector<int>> &grid) {
    n = grid.size();
    m = grid[0].size();
    visited = vector<vector<int>>(n, vector<int>(m, false));
    int ans = 0;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (!visited[i][j] && grid[i][j] != 0) {
          int temp = bfs(grid, i, j);
          ans = max(ans, temp);
        }
      }
    }

    return ans;
  }
};
