#include <bits/stdc++.h>
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
};

int main() {
  Heap heap;

  heap.insert(50);
  heap.insert(55);
  heap.insert(53);
  heap.insert(52);
  heap.insert(54);
  heap.print();

  return 0;
}
