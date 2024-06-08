#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
  vector<int> twoSum(vector<int> &numbers, int target) {
    int low = 0, high = numbers.size() - 1;
    int temp;

    while (low < high) {
      temp = numbers[low] + numbers[high];
      if (temp == target)
        return {low, high};
      if (temp < target)
        low++;
      else
        high--;
    }

    return {0, 0};
  }
};
