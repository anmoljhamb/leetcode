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
  ListNode *reverseLL(ListNode *head) {
    ListNode *prev = nullptr, *temp, *curr;
    curr = head;
    while (curr != nullptr) {
      temp = curr->next;
      curr->next = prev;
      prev = curr;
      curr = temp;
    }
    return prev;
  }

  void printLL(ListNode *head) {
    ListNode *curr = head;
    while (curr != nullptr) {
      cout << curr->val << " ";
      curr = curr->next;
    }
    cout << endl;
  }

  void reorderList(ListNode *head) {
    ListNode *slow = head, *fast = head->next;
    while (fast != nullptr && fast->next != nullptr) {
      slow = slow->next;
      fast = fast->next;
      fast = fast->next;
    }
    ListNode *list2 = reverseLL(slow->next);
    slow->next = nullptr;
    ListNode *list1 = head;
    ListNode *temp1, *temp2;
    while (list1 != nullptr && list2 != nullptr) {
      temp1 = list1->next;
      temp2 = list2->next;
      list1->next = list2;
      list2->next = temp1;
      list1 = temp1;
      list2 = temp2;
    }
  }
};
