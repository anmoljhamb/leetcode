#include <bits/stdc++.h>
#include <utility>
using namespace std;

class Heap {
  vector<int> arr;

public:
  Heap() { arr = vector<int>(1); }

  void insert(int x) {
    arr.push_back(x);
    int i = arr.size() - 1;
    while (i > 1 && arr[i / 2] < arr[i]) {
      swap(arr[i], arr[i / 2]);
      i = i / 2;
    }
  }

  void print() {
    for (int i = 1; i < arr.size(); i++) {
      cout << arr[i] << ", ";
    }
    cout << endl;
  }

  void delete_top() {
    // swap the head with the last element
    if (arr.size() == 1) {
      return;
    }

    swap(arr[1], arr[arr.size() - 1]);
    arr.erase(arr.end() - 1);

    int i = 1;
    // go till the leaf nodes.
    while (i < (arr.size()) / 2) {
      if (arr[i] < arr[2 * i]) {
        swap(arr[i], arr[2 * i]);
        i = 2 * i;
        continue;
      }
      if (arr[i] < arr[2 * i + 1]) {
        swap(arr[i], arr[2 * i + 1]);
        i = 2 * i + 1;
        continue;
      }
      return;
    }
  }
};

int main() {
  Heap heap;

  heap.insert(50);
  heap.insert(55);
  heap.insert(53);
  heap.insert(52);
  heap.insert(54);
  heap.print();
  heap.delete_top();
  heap.print();

  return 0;
}
