#include <algorithm>
#include <bits/stdc++.h>
#include <cstdlib>
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
  bool ans = true;

public:
  int dfs(TreeNode *root) {
    if (root == nullptr)
      return 0;
    int left = dfs(root->left);
    int right = dfs(root->right);

    if (abs(left - right) > 1) {
      ans = false;
    }

    return max(left, right) + 1;
  }
  bool isBalanced(TreeNode *root) {
    dfs(root);
    return ans;
  }
};
