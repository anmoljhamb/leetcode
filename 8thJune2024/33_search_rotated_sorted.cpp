#include <bits/stdc++.h>
#include <cstdint>
using namespace std;

int find_pivot(vector<int> arr) {
  int low = 0, high = arr.size() - 1;
  int pivot = arr.size();
  int minVal = INT32_MAX;
  while (low <= high) {
    int mid = (low + high) / 2;
    if (arr[low] <= arr[mid] && arr[mid] <= arr[high]) {
      if (arr[low] < minVal)
        return low;
      return pivot;
    } else if (arr[mid] <= arr[high] && arr[high] <= arr[low]) {
      if (arr[mid] <= minVal) {
        pivot = mid;
        minVal = arr[mid];
      }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return pivot;
}

class Solution {
public:
  int search(vector<int> &arr, int target) {
    int pivot = find_pivot(arr);
    int low = 0, high = arr.size() - 1;
    if (pivot != 0) {
      if (arr[low] <= target && target <= arr[pivot - 1]) {
        high = pivot - 1;
      } else {
        low = pivot;
      }
    }
    while (low <= high) {
      int mid = (low + high) / 2;
      if (arr[mid] == target)
        return mid;
      if (arr[mid] > target)
        high = mid - 1;
      else
        low = mid + 1;
    }
    return -1;
  }
};
