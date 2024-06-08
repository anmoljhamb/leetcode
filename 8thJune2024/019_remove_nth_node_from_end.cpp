#include <bits/stdc++.h>
using namespace std;

struct ListNode {
  int val;
  ListNode *next;
  ListNode() : val(0), next(nullptr) {}
  ListNode(int x) : val(x), next(nullptr) {}
  ListNode(int x, ListNode *next) : val(x), next(next) {}
};

class Solution {
public:
  ListNode *removeNthFromEnd(ListNode *head, int n) {
    ListNode *dummy;
    dummy = new ListNode(0, head);
    ListNode *left = dummy;
    ListNode *right = dummy->next;
    while (n--) {
      right = right->next;
    }
    while (right != nullptr) {
      right = right->next;
      left = left->next;
    }
    left->next = left->next->next;
    return dummy->next;
  }
};
