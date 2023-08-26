function mergeTwoLists(
    list1: ListNode | null,
    list2: ListNode | null
): ListNode | null {
    if (!list1 && !list2) {
        return null;
    }
    if (list2 === null) {
        return list1;
    }
    if (list1 === null) {
        return list2;
    }

    let temp: number;

    if (list1.val < list2.val) {
        temp = list1.val;
        list1 = list1.next;
    } else {
        temp = list2.val;
        list2 = list2.next;
    }

    let ans = new ListNode(temp);
    let head = ans;

    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            temp = list1.val;
            list1 = list1.next;
        } else {
            temp = list2.val;
            list2 = list2.next;
        }
        ans.next = new ListNode(temp);
        ans = ans.next;
    }

    while (list1) {
        ans.next = new ListNode(list1.val);
        list1 = list1.next;
        ans = ans.next;
    }

    while (list2) {
        ans.next = new ListNode(list2.val);
        list2 = list2.next;
        ans = ans.next;
    }

    return head;
}
