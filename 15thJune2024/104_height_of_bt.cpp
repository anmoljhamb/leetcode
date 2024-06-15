#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left, *right;
  TreeNode(int val) : val(val), left(nullptr), right(nullptr) {}
};

class Solution {
public:
  int maxDepth(TreeNode *root) {
    if (root == nullptr)
      return 0;

    int lh = maxDepth(root->left);
    int rh = maxDepth(root->right);

    return 1 + max(lh, rh);
  }
};
