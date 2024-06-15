#include <bits/stdc++.h>
using namespace std;

class Solution {
  vector<bool> visited, is_visiting;
  vector<int> ans;

public:
  bool dfs(vector<vector<int>> &adj_list, int i) {
    if (is_visiting[i])
      return false;
    if (visited[i])
      return true;

    is_visiting[i] = true;
    for (auto x : adj_list[i]) {
      if (!dfs(adj_list, x))
        return false;
    }

    ans.push_back(i);
    visited[i] = true;
    is_visiting[i] = false;
    return true;
  }

  vector<int> findOrder(int numCourses, vector<vector<int>> &prerequisites) {
    ans = vector<int>();
    visited = vector<bool>(numCourses, false);
    is_visiting = vector<bool>(numCourses, false);
    vector<vector<int>> adj_list(numCourses, vector<int>());

    for (auto x : prerequisites) {
      adj_list[x[0]].push_back(x[1]);
    }

    for (int i = 0; i < numCourses; i++) {
      if (!dfs(adj_list, i))
        return {};
    }

    return ans;
  }
};
