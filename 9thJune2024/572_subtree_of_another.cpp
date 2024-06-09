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

  bool isSubstr(string haystack, string needle) {
    const int n = haystack.size(), m = needle.size();
    vector<int> lps(m, 0);

    int i = 0, j = 0, prevLps = 0;

    i = 1;

    while (i < m) {
      if (needle[i] == needle[prevLps]) {
        lps[i] = prevLps + 1;
        prevLps = lps[i];
        i++;
        continue;
      }

      if (prevLps == 0) {
        lps[i] = 0;
        i++;
        continue;
      }

      prevLps = lps[prevLps - 1];
    }

    i = 0, j = 0;

    while (i < n) {
      if (haystack[i] == needle[j]) {
        i++;
        j++;
      } else if (j == 0) {
        i++;
      } else {
        j = lps[j - 1];
      }

      if (j == m) {
        return true;
      }
    }

    return false;
  }

  bool isSubtree(TreeNode *root, TreeNode *subRoot) {
    string str1 = serialize(root);
    string str2 = serialize(subRoot);
    return isSubstr(str1, str2);
  }
};
