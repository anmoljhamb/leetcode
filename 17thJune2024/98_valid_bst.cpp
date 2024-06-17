#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left, *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
  TreeNode(int val) : val(val), left(nullptr), right(nullptr) {}
};

const long MAX = (long)INT32_MAX + 1;
const long MIN = (long)INT32_MIN - 1;

class Solution {
public:
  bool isValidBST(TreeNode *root, long left = MIN, long right = MAX) {
    if (!root)
      return true;

    int val = root->val;
    if (val <= left || val >= right) {
      return false;
    }

    return isValidBST(root->left, left, val) &&
           isValidBST(root->right, val, right);
  }
};
