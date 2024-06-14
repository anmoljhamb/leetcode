#include <bits/stdc++.h>
using namespace std;

class Node {
public:
  int val;
  vector<Node *> neighbors;
  Node() {
    val = 0;
    neighbors = vector<Node *>();
  }
  Node(int _val) {
    val = _val;
    neighbors = vector<Node *>();
  }
  Node(int _val, vector<Node *> _neighbors) {
    val = _val;
    neighbors = _neighbors;
  }
};

class Solution {
  vector<Node *> hashmap;
  vector<bool> visited;

public:
  void dfs(Node *node) {
    if (!node)
      return;
    if (visited[node->val])
      return;

    hashmap[node->val] = new Node(node->val);
    visited[node->val] = true;

    for (Node *neighbor : node->neighbors) {
      if (!visited[neighbor->val])
        dfs(neighbor);
    }
  }

  void util(Node *node) {
    if (!node)
      return;
    if (visited[node->val])
      return;

    visited[node->val] = true;

    for (Node *neighbor : node->neighbors) {
      if (!neighbor)
        continue;
      hashmap[node->val]->neighbors.push_back(hashmap[neighbor->val]);
      util(neighbor);
    }
  }

  Node *cloneGraph(Node *node) {
    if (!node)
      return nullptr;
    hashmap = vector<Node *>(101, nullptr);
    visited = vector<bool>(101, false);

    dfs(node);

    visited = vector<bool>(101, false);
    util(node);

    return hashmap[node->val];
  }
};
