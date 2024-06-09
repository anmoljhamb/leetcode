#include <algorithm>
#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left;
  TreeNode *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
  TreeNode(int x, TreeNode *left, TreeNode *right)
      : val(x), left(left), right(right) {}
};

long MAX = (long)INT32_MAX + 1;
long MIN = (long)INT32_MIN - 1;

class Solution {

public:
  bool isValidBST(TreeNode *root, long left_boundary = MIN,
                  long right_boundary = MAX) {
    if (!root)
      return true;
    if (right_boundary <= root->val || left_boundary >= root->val)
      return false;

    auto left = isValidBST(root->left, left_boundary, root->val);
    auto right = isValidBST(root->right, root->val, right_boundary);

    return left && right;
  }
};
