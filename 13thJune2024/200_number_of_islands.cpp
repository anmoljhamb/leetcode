#include <bits/stdc++.h>
#include <queue>
#include <utility>
using namespace std;

typedef unordered_set<int> us;

class Solution {
  int n, m;
  int pos(int i, int j) { return i * m + j; }
  int ans = 0;
  vector<bool> visited;

  void bfs(vector<vector<char>> grid, int i, int j) {
    queue<pair<int, int>> q;
    q.push({i, j});

    while (!q.empty()) {
      queue<pair<int, int>> temp;

      while (!q.empty()) {
        auto curr = q.front();
        q.pop();

        if (visited[pos(curr.first, curr.second)])
          continue;

        if (curr.first + 1 < n && grid[curr.first + 1][curr.second] != '0') {
          temp.push({curr.first + 1, curr.second});
        }

        if (curr.first - 1 >= 0 && grid[curr.first - 1][curr.second] != '0') {
          temp.push({curr.first - 1, curr.second});
        }

        if (curr.second + 1 < m && grid[curr.first][curr.second + 1] != '0') {
          temp.push({curr.first, curr.second + 1});
        }

        if (curr.second - 1 >= 0 && grid[curr.first][curr.second - 1] != '0') {
          temp.push({curr.first, curr.second - 1});
        }

        visited[pos(curr.first, curr.second)] = true;
      }

      q = temp;
    }
  }

public:
  int numIslands(vector<vector<char>> &grid) {
    ans = 0;
    n = grid.size();
    m = grid[0].size();
    visited = vector<bool>(m * n, false);

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (!visited[pos(i, j)] && grid[i][j] != '0') {
          bfs(grid, i, j);
          ans++;
        }
      }
    }

    return ans;
  }
};
