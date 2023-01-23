# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:

        carry = None

        el = l1.val + l2.val
        if (el >= 10):
            el -= 10
            carry = 1

        ans = ListNode(el)
        curr = ans

        l1 = l1.next
        l2 = l2.next

        while (l1 != None or l2 != None):

            if (l1 is None):

                el = None

                if (carry != None):
                    el = l2.val + carry
                    if (el >= 10):
                        carry = 1
                        el -= 10
                    else:
                        carry = None
                else:
                    el = l2.val

                curr.next = ListNode(el)

                l2 = l2.next
                curr = curr.next

            elif (l2 is None):
                el = None

                if (carry != None):
                    el = l1.val + carry
                    if (el >= 10):
                        carry = 1
                        el -= 10
                    else:
                        carry = None
                else:
                    el = l1.val

                curr.next = ListNode(el)

                l1 = l1.next
                curr = curr.next
            else:
                el = l1.val + l2.val

                if (carry != None):
                    el += carry
                    carry = None

                if (el >= 10):
                    carry = 1
                    el = el - 10
                curr.next = ListNode(el)

                curr = curr.next
                l1 = l1.next
                l2 = l2.next

        if (carry):
            curr.next = ListNode(carry)
        return ans
