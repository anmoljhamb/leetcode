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
  int count = 0;

  ListNode *mergeTwoLists(ListNode *list1, ListNode *list2) {
    ListNode *dummy = new ListNode();
    ListNode *tail = dummy;

    while (list1 && list2) {
      count++;
      if (list1->val < list2->val) {
        tail->next = list1;
        list1 = list1->next;
      } else {
        tail->next = list2;
        list2 = list2->next;
      }
      tail = tail->next;
    }

    if (list1) {
      tail->next = list1;
    }

    if (list2) {
      tail->next = list2;
    }

    return dummy->next;
  }

public:
  ListNode *mergeKLists(vector<ListNode *> &lists) {

    if (lists.size() == 0)
      return nullptr;

    ListNode *ans = lists[0];

    for (int i = 1; i < lists.size(); i++) {
      ans = mergeTwoLists(ans, lists[i]);
    }

    return ans;
  }
};
