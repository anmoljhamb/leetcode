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

public:
  vector<int> rightSideView(TreeNode *root) {
    if (!root)
      return {};
    vector<int> ans;
    queue<TreeNode *> q;

    q.push(root);

    while (!q.empty()) {
      int temp;
      queue<TreeNode *> q_temp;

      while (!q.empty()) {
        auto curr = q.front();
        q.pop();
        if (!curr) {
          continue;
        }
        temp = curr->val;
        if (curr->left)
          q_temp.push(curr->left);
        if (curr->right)
          q_temp.push(curr->right);
      }

      ans.push_back(temp);
      q = q_temp;
    }

    return ans;
  }
};
