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
  int ans = 0;

public:
  void helper(TreeNode *root, int _max) {
    if (!root)
      return;

    _max = max(_max, root->val);

    if (_max <= root->val)
      ans++;

    helper(root->left, _max);
    helper(root->right, _max);
  }
  int goodNodes(TreeNode *root) {
    helper(root, INT32_MIN);
    return ans;
  }
};
