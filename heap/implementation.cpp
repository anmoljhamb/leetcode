#include <bits/stdc++.h>
using namespace std;

class Heap {
  vector<int> arr;

  void swap(int i, int j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
  }

public:
  Heap() { arr = vector<int>(1); }

  void insert(int x) {
    arr.push_back(x);
    int i = arr.size() - 1;
    while (i != 1 || arr[i] < arr[i / 2]) {
      swap(i, i / 2);
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
  heap.print();
  heap.insert(70);
  heap.print();
  heap.insert(90);
  heap.print();

  return 0;
}
