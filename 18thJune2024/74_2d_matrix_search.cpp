#include <bits/stdc++.h>
using namespace std;

class Solution {
  int n, m;

public:
  int get_row(vector<vector<int>> &matrix, int target) {
    int low = 0, high = n - 1, mid;

    while (low <= high) {
      mid = (low + high) / 2;

      if (matrix[mid][0] <= target && target <= matrix[mid][m - 1]) {
        return mid;
      }

      if (target < matrix[mid][0]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  }

  bool bs(vector<int> &arr, int target) {
    int low = 0, high = m - 1;

    while (low <= high) {
      int mid = (low + high) / 2;
      if (arr[mid] == target)
        return true;

      if (arr[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return false;
  }

  bool searchMatrix(vector<vector<int>> &matrix, int target) {
    n = matrix.size();
    m = matrix[0].size();
    int row = get_row(matrix, target);
    if (row == -1)
      return false;
    return bs(matrix[row], target);
  }
};
