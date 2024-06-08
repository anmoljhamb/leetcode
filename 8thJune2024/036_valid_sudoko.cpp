#include <bits/stdc++.h>
#include <string>
#include <unordered_map>
#include <unordered_set>
using namespace std;

string key(int i, int j) { return to_string(i) + "-" + to_string(j); }
class Solution {
public:
  bool isValidSudoku(vector<vector<char>> &board) {
    unordered_map<int, unordered_set<int>> rows, cols;
    unordered_map<string, unordered_set<int>> boxes;
    const int n = 9;

    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (board[i][j] == '.')
          continue;
        if (rows[i].count(board[i][j]) == 1)
          return false;
        if (cols[j].count(board[i][j]) == 1)
          return false;
        if (boxes[key(i / 3, j / 3)].count(board[i][j]) == 1)
          return false;
        rows[i].insert(board[i][j]);
        cols[j].insert(board[i][j]);
        boxes[key(i / 3, j / 3)].insert(board[i][j]);
      }
    }

    return true;
  }
};
