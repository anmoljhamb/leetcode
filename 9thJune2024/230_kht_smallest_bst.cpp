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
  int count = 0;
  int index = 0;

public:
  void helper(TreeNode *root) {
    if (!root) {
      return;
    }

    helper(root->left);
    if (count == index) {
      ans = root->val;
    }
    count++;
    helper(root->right);

    return;
  }

  int kthSmallest(TreeNode *root, int k) {
    index = k - 1;
    helper(root);
    return ans;
  }
};
