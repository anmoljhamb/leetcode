#include <algorithm>
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
  ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
    int temp;
    if (list1 == nullptr)
      return list2;
    if (list2 == nullptr)
      return list1;

    if (list1->val < list2->val) {
      temp = list1->val;
      list1 = list1->next;
    } else {
      temp = list2->val;
      list2 = list2->next;
    }

    ListNode *head = new ListNode(temp), *curr = head;

    while (list1 != nullptr && list2 != nullptr) {
      int temp;
      if (list1->val < list2->val) {
        temp = list1->val;
        list1 = list1->next;
      } else {
        temp = list2->val;
        list2 = list2->next;
      }
      curr->next = new ListNode(temp);
      curr = curr->next;
    }

    while (list1 != nullptr) {
      curr->next = new ListNode(list1->val);
      curr = curr->next;
      list1 = list1->next;
    }

    while (list2 != nullptr) {
      curr->next = new ListNode(list2->val);
      curr = curr->next;
      list2 = list2->next;
    }

    return head;
  }
};
