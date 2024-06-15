#include <bits/stdc++.h>
#include <unordered_set>
using namespace std;

class Solution {
  vector<bool> visited;

  bool dfs(vector<unordered_set<int>> &s, int i) {
    if (visited[i])
      return false;
    if (s[i].size() == 0)
      return true;

    visited[i] = true;
    for (auto x : s[i]) {
      if (!dfs(s, x)) {
        return false;
      }
    }
    visited[i] = false;
    s[i].clear();
    return true;
  }

public:
  bool canFinish(int numCourses, vector<vector<int>> &prerequisites) {
    vector<unordered_set<int>> adj_list(numCourses, unordered_set<int>());

    for (auto x : prerequisites) {
      adj_list[x[0]].insert(x[1]);
    }

    visited = vector<bool>(numCourses, false);

    for (int i = 0; i < numCourses; i++) {
      if (!dfs(adj_list, i)) {
        return false;
      }
    }

    return true;
  }
};
