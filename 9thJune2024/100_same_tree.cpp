#include <bits/stdc++.h>
#include <cstdlib>
#include <string>
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
  string seralize(TreeNode *root) {
    if (!root)
      return "^";

    string left = seralize(root->left);
    string right = seralize(root->right);

    return to_string(root->val) + " " + left + " " + right;
  }

  bool isSameTree(TreeNode *p, TreeNode *q) {
    string left = seralize(p);
    string right = seralize(q);

    cout << left << endl;
    cout << right << endl;
    return left == right;
  }
};
