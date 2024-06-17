#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left, *right;
  TreeNode() : val(0), left(nullptr), right(nullptr) {}
};

class Solution {
  int ans;
  int k;
  int i = 0;

public:
  void util(TreeNode *root) {
    if (!root)
      return;

    util(root->left);
    if (i == k) {
      ans = root->val;
    }
    i++;
    util(root->right);
  }

  int kthSmallest(TreeNode *root, int k) {
    this->k = k - 1;
    util(root);
    return this->ans;
  }
};
