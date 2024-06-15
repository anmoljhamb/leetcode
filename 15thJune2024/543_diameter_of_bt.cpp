#include <algorithm>
#include <bits/stdc++.h>
using namespace std;

struct TreeNode {
  int val;
  TreeNode *left, *right;
  TreeNode(int val) : val(val), left(nullptr), right(nullptr) {}
};

class Solution {
public:
  int dfs(TreeNode *root, int &ans) {
    if (root == nullptr)
      return 0;

    int lh = dfs(root->left, ans);
    int rh = dfs(root->right, ans);

    ans = max(ans, lh + rh);

    return 1 + max(lh, rh);
  }

  int diameterOfBinaryTree(TreeNode *root) {
    int ans = -1;
    dfs(root, ans);
    return ans;
  }
};
