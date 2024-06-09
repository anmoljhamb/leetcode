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
  vector<int> sorted;

public:
  void helper(TreeNode *root) {
    if (!root) {
      return;
    }

    helper(root->left);
    sorted.push_back(root->val);
    helper(root->right);

    return;
  }

  void printSorted() {
    for (auto x : sorted) {
      cout << x << " ";
    }
    cout << endl;
  }

  int kthSmallest(TreeNode *root, int k) {
    helper(root);
    printSorted();
    return sorted[k - 1];
  }
};
