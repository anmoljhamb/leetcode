#include <bits/stdc++.h>
using namespace std;

class Solution {
  int n, m;

  void dfs(vector<vector<char>> &board, int i, int j) {
    if (i < 0 || i == n)
      return;
    if (j < 0 || j == m)
      return;
    if (board[i][j] != 'O')
      return;
    board[i][j] = 'T';
    dfs(board, i + 1, j);
    dfs(board, i - 1, j);
    dfs(board, i, j + 1);
    dfs(board, i, j - 1);
  }

public:
  void solve(vector<vector<char>> &board) {
    n = board.size();
    m = board[0].size();

    for (int i = 0; i < n; i++) {
      dfs(board, i, 0);
      dfs(board, i, m - 1);
    }

    for (int j = 0; j < m; j++) {
      dfs(board, 0, j);
      dfs(board, n - 1, j);
    }

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < m; j++) {
        if (board[i][j] == 'O') {
          board[i][j] = 'X';
        } else if (board[i][j] == 'T') {
          board[i][j] = 'O';
        }
      }
    }
  }
};
