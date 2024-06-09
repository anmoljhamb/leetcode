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

class Solution {

public:
  bool isValidBST(TreeNode *root, int left_boundary = INT32_MIN,
                  int right_boundary = INT32_MAX) {
    if (!root)
      return true;
    if (right_boundary <= root->val || left_boundary >= root->val)
      return false;

    auto left = isValidBST(root->left, left_boundary, root->val);
    auto right = isValidBST(root->right, root->val, right_boundary);

    return left && right;
  }
};
