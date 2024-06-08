#include <bits/stdc++.h>
#include <unordered_map>
using namespace std;

struct LinkedList {
  int key;
  int val;
  LinkedList *next;
  LinkedList *prev;
  LinkedList() : key(0), val(0), next(nullptr), prev(nullptr) {}
  LinkedList(int x, int y) : key(x), val(y), next(nullptr), prev(nullptr) {}
};

class LRUCache {
  int cap;
  unordered_map<int, LinkedList *> hashmap;
  LinkedList *left, *right;

public:
  LRUCache(int capacity) {
    cap = capacity;

    // left = LRU, right = MRU
    left = new LinkedList();
    right = new LinkedList();

    left->next = right;
    right->prev = left;
  }

  void delete_node(LinkedList *node) {
    LinkedList *prev, *next;
    prev = node->prev;
    next = node->next;
    prev->next = next;
    next->prev = prev;
  }

  void insert_node(LinkedList *node) {
    LinkedList *prev, *next;
    prev = right->prev;
    next = right;
    prev->next = node;
    next->prev = node;
    node->next = next;
    node->prev = prev;
  }

  int get(int key) {
    // make the given key, the most recent
    if (hashmap.count(key) == 0)
      return -1;

    delete_node(hashmap[key]);
    LinkedList *new_node = new LinkedList(key, hashmap[key]->val);
    insert_node(new_node);
    hashmap[key] = new_node;
    return hashmap[key]->val;
  }

  void put(int key, int value) {
    // if capacity full, delete the LRU
    if (hashmap.count(key) == 0 && cap == 0) {
      hashmap.erase(left->next->key);
      delete_node(left->next);
      cap++;
    }
    // if the key exists, then over write the value, and make insert the node
    LinkedList *new_node = new LinkedList(key, value);
    if (hashmap.count(key) == 1) {
      delete_node(hashmap[key]);
      hashmap[key] = new_node;
      cap++;
    }
    // at right
    insert_node(new_node);
    hashmap[key] = new_node;
    cap--;
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */
