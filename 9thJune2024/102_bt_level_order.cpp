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
  vector<vector<int>> levelOrder(TreeNode *root) {
    if (!root)
      return {};

    queue<TreeNode *> q;
    vector<vector<int>> ans;

    q.push(root);

    while (!q.empty()) {
      queue<TreeNode *> q_temp;
      vector<int> v_temp;
      while (!q.empty()) {
        auto curr = q.front();
        q.pop();
        if (!curr)
          continue;
        v_temp.push_back(curr->val);
        if (curr->left) {
          q_temp.push(curr->left);
        }
        if (curr->right) {
          q_temp.push(curr->right);
        }
      }
      ans.push_back(v_temp);
      q = q_temp;
    }

    return ans;
  }
};
