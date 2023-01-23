# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if (list1 is None):
            return list2
        if (list2 is None):
            return list1

        el = None
        if (list1.val > list2.val):
            el = list2.val
            list2 = list2.next
        else:
            el = list1.val
            list1 = list1.next

        head = ListNode(el)
        curr = head
        while (list1 != None or list2 != None):
            if (list1 is None):
                curr.next = ListNode(list2.val)
                list2 = list2.next
            elif (list2 is None):
                curr.next = ListNode(list1.val)
                list1 = list1.next
            else:
                el = None
                if (list1.val < list2.val):
                    el = list1.val
                    list1 = list1.next
                else:
                    el = list2.val
                    list2 = list2.next
                curr.next = ListNode(el)
            curr = curr.next
        return head
