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
  string serialize(TreeNode *root) {
    if (!root)
      return "^";
    string left = serialize(root->left);
    string right = serialize(root->right);

    return left + "-" + right + "-" + to_string(root->val) + "-";
  }

  bool isSubstr(string str1, string str2) {
    return str1.find(str2) != string::npos;
  }

  bool isSubtree(TreeNode *root, TreeNode *subRoot) {
    string str1 = serialize(root);
    string str2 = serialize(subRoot);
    cout << str1 << endl;
    cout << str2 << endl;
    return isSubstr(str1, str2);
  }
};
