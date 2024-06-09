#include <bits/stdc++.h>
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
  TreeNode *ans;

public:
  void helper(TreeNode *root, int a, int b) {
    if (!root)
      return;

    if (a < root->val && b < root->val)
      return helper(root->left, a, b);
    if (a > root->val && b > root->val)
      return helper(root->right, a, b);

    ans = root;

    return;
  }

  TreeNode *lowestCommonAncestor(TreeNode *root, TreeNode *p, TreeNode *q) {
    helper(root, p->val, q->val);
    return ans;
  }
};
